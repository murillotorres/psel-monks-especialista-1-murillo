<?php 

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