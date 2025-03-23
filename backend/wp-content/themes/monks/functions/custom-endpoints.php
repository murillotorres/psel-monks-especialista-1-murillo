<?php
function get_menu_items($menu_name) {
    $menu_items = wp_get_nav_menu_items($menu_name);
    $menu_data = [];

    if ($menu_items) {
        foreach ($menu_items as $item) {
            $menu_data[] = [
                'title' => $item->title,
                'url'   => $item->url
            ];
        }
    }

    return $menu_data;
}

function get_header_menu() {
    return rest_ensure_response(get_menu_items('header'));
}

function get_footer_menu() {
    return rest_ensure_response(get_menu_items('footer'));
}

function register_custom_routes() {
    register_rest_route('/wp/v2', '/header-menu', [
        'methods'  => 'GET',
        'callback' => 'get_header_menu',
        'permission_callback' => '__return_true'
    ]);

    register_rest_route('/wp/v2', '/footer-menu', [
        'methods'  => 'GET',
        'callback' => 'get_footer_menu',
        'permission_callback' => '__return_true'
    ]);
}

add_action('rest_api_init', 'register_custom_routes');


function register_acf_options_endpoint() {
    register_rest_route( '/wp/v2', '/site-config', [
        'methods'             => 'GET',
        'callback'            => 'get_acf_site_config',
        'permission_callback' => '__return_true',
    ]);
}
add_action( 'rest_api_init', 'register_acf_options_endpoint' );

function get_acf_site_config() {
    $site_config = get_fields('option');
    if ($site_config) {
        return rest_ensure_response($site_config);
    } else {
        return rest_ensure_response([]);
    }
}