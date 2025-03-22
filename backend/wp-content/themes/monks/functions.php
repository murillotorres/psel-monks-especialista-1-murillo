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

// THEME SETTINGS 
if( function_exists('acf_add_options_page') ) {
    acf_add_options_page(array(
        'page_title'    => 'Configurações do Site',
        'menu_title'    => 'Opções do Tema',
        'menu_slug'     => 'site-config',
        'capability'    => 'edit_posts',
        'parent_slug'   => 'themes.php', 
        'redirect'      => false
    ));
}

// ENDPOINTS PERSONALIZADOS NA API REST 
require_once get_template_directory() . '/custom-endpoints.php';
