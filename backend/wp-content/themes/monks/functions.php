<?php
add_theme_support('title-tag');
add_theme_support('menus');

function register_menu_theme() {
    register_nav_menus(
        array(
            'header' => 'Menu Principal',
            'footer' => 'Rodapé'
        )
    );
}
add_action('after_setup_theme', 'register_menu_theme');

// ENDPOINTS PERSONALIZADOS NA API REST 
require_once get_template_directory() . '/custom-endpoints.php';
