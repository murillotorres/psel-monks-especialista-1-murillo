<?php

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
