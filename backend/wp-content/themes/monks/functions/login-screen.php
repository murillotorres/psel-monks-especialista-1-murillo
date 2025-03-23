<?php 
function custom_login_logo() {
    echo '<style type="text/css">
        .login h1 a {
            background-image: url(' . get_template_directory_uri() . '/logotipo-monks-login-screen.svg) !important;
            background-size: contain !important;
            width: 200px !important;
            height: 40px !important;
        }
        
        .login #backtoblog, .login #nav {display:none;}
    </style>';
}
add_action('login_enqueue_scripts', 'custom_login_logo');

function custom_login_logo_url() {
    return 'https://www.monks.com/pt';
}
add_filter('login_headerurl', 'custom_login_logo_url');

function custom_login_logo_title() {
    return 'Monks';
}
add_filter('login_headertext', 'custom_login_logo_title');
