<?php
/**
 * Plugin Name: Form Submissions API
 * Description: API para receber submissões de formulários no WordPress.
 * Version: 1.0
 * Author: Murillo Torres
 */

if (!defined('ABSPATH')) {
    exit; // Evita acesso direto ao arquivo
}

// Criar a tabela ao ativar o plugin
function create_form_submissions_table() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'form_submissions';
    $charset_collate = $wpdb->get_charset_collate();

    $sql = "CREATE TABLE IF NOT EXISTS $table_name (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NULL,
        city VARCHAR(100) NULL,
        user_ip VARCHAR(45) NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    ) $charset_collate;";

    require_once ABSPATH . 'wp-admin/includes/upgrade.php';
    dbDelta($sql);
}
register_activation_hook(__FILE__, 'create_form_submissions_table');

// Adicionar endpoint REST API
add_action('rest_api_init', function () {
    register_rest_route('wp/v2', '/form-submit', array(
        'methods'  => 'POST',
        'callback' => 'handle_form_submission',
        'permission_callback' => '__return_true',
    ));
});

// Função para validar token
function validate_form_token($request) {
    $token = $request->get_header('X-Form-Token');
    $secret_key = defined('FORM_SECRET_KEY') ? FORM_SECRET_KEY : '';

    return hash_equals($secret_key, $token); // Evita ataques de timing
}


// Manipular envio do formulário
function handle_form_submission(WP_REST_Request $request) {
    if (!validate_form_token($request)) {
        return new WP_REST_Response(['message' => 'Erro ao enviar mensagem: Não autorizado.'], 401);
    }

    global $wpdb;
    $table_name = 'form_submissions';
    // $table_name = $wpdb->prefix . 'form_submissions';

    $name  = sanitize_text_field($request->get_param('name'));
    $email = sanitize_email($request->get_param('email'));
    $phone = sanitize_text_field($request->get_param('phone'));
    $city  = sanitize_text_field($request->get_param('city'));
    $ip    = $request->get_header('X-User-IP');

    $honeypot = $request->get_param('honeypot');
    if (!empty($honeypot)) {
        return new WP_REST_Response(['message' => 'Erro ao enviar mensagem: Muitas requisições em pouco tempo.'], 400);
    }

    if (empty($name) || empty($email)) {
        return new WP_REST_Response(['message' => 'Preencha o nome e e-mail.'], 400);
    }

    // Verifica se o IP já fez muitas requisições no último minuto
    $recent_submissions = (int) $wpdb->get_var($wpdb->prepare(
        "SELECT COUNT(*) FROM $table_name WHERE created_at >= (NOW() - INTERVAL 1 MINUTE) AND user_ip = %s",
        $ip
    ));

    if ($recent_submissions > 3) {
        return new WP_REST_Response(['message' => 'Too many requests'], 429);
    } else { 
        $wpdb->insert($table_name, [
            'name'       => $name,
            'email'      => $email,
            'phone'      => $phone,
            'city'       => $city,
            'user_ip'    => $ip
        ]);

        return new WP_REST_Response(['message' => 'Mensagem enviada com sucesso!'], 200);
    }
}


// PERMITE REQUISIÇÕES PELO CORS DE UM ENDEREÇO ESPECIFICO 
function custom_cors_headers() {
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, X-Form-Token, X-User-IP, Authorization");
}

add_action('rest_api_init', function () {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function ($value) {
        custom_cors_headers();
        return $value;
    });
});

add_action('init', function () {
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        custom_cors_headers();
        status_header(200);
        exit();
    }
});

