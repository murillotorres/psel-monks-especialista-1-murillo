<?php

function remove_posts_from_menu() {
    remove_menu_page( 'edit.php' ); // Remove a seção "Posts"
    remove_submenu_page('edit.php?post_type=page', 'post-new.php?post_type=page');
}
add_action( 'admin_menu', 'remove_posts_from_menu' );

function remove_comments_menu() {
    remove_menu_page( 'edit-comments.php' ); 
}
add_action( 'admin_menu', 'remove_comments_menu' );

function disable_comments_post_type() {
    remove_post_type_support( 'post', 'comments' );
    remove_post_type_support( 'page', 'comments' );
}
add_action( 'init', 'disable_comments_post_type' );

function remove_new_page_button() {
    global $pagenow;

    if ($pagenow === 'edit.php' && isset($_GET['post_type']) && $_GET['post_type'] === 'page') {
        echo '<style>.page-title-action, .row-actions .trash, .row-actions .view { display: none !important; }</style>';
    }

    if ($pagenow === 'post.php' && isset($_GET['post']) && get_post_type($_GET['post']) === 'page') {
        echo '<style>.page-title-action, #edit-slug-box, #delete-action { display: none !important; }</style>';
    }
}
add_action('admin_head', 'remove_new_page_button');

function remove_admin_bar_new_button($wp_admin_bar) {
    if (is_admin()) {
        $wp_admin_bar->remove_node('new-post');  // Remove a opção de 'Novo Post'
        $wp_admin_bar->remove_node('new-page');  // Remove a opção de 'Nova Página'
    }
}
add_action('admin_bar_menu', 'remove_admin_bar_new_button', 999);
