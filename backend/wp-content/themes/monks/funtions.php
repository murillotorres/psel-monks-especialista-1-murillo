<?php

//ADD ACF CUSTOM FIELDS TO THE WORDPRESS REST API
function add_acf_on_api( $data, $post, $request ) {
    $data->data['acf'] = get_fields($post->ID);
    return $data;
}
add_filter( 'rest_prepare_post', 'add_acf_on_api', 10, 3 );