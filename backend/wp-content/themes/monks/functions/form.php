<?php 
function render_form_submissions_admin_page() {
    global $wpdb;
    // $table_name = $wpdb->prefix . 'form_submissions';
    $table_name = 'form_submissions';

    // Paginação
    $per_page = 3; // Número de registros por página
    $paged = isset($_GET['paged']) ? max(1, intval($_GET['paged'])) : 1;
    $offset = ($paged - 1) * $per_page;

    // Busca os registros com limite e offset
    $results = $wpdb->get_results($wpdb->prepare(
        "SELECT * FROM $table_name ORDER BY created_at DESC LIMIT %d OFFSET %d",
        $per_page, $offset
    ));

    // Contagem total de registros
    $total_items = $wpdb->get_var("SELECT COUNT(*) FROM $table_name");
    $total_pages = ceil($total_items / $per_page);

    echo '<div class="wrap"><h1>Respostas do Formulário de Contato</h1>';
    
    echo '<table class="widefat fixed" cellspacing="0">';
    echo '
    <thead>
        <tr>
            <th style="font-weight:bold">Nome</th>
            <th style="font-weight:bold">Email</th>
            <th style="font-weight:bold">Telefone</th>
            <th style="font-weight:bold">Cidade</th>
            <th style="font-weight:bold">Data</th>
        </tr>
    </thead>';
    echo '<tbody>';

    if ($results) {
        foreach ($results as $row) {
            echo "<tr>
                    <td>{$row->name}</td>
                    <td>{$row->email}</td>
                    <td>{$row->phone}</td>
                    <td>{$row->city}</td>
                    <td>{$row->created_at}</td>
                  </tr>";
        }
    } else {
        echo '<tr><td colspan="5">Nenhuma submissão encontrada.</td></tr>';
    }

    echo '</tbody></table>';

    // Paginação
    if ($total_pages > 1) {
        echo '<div class="tablenav"><div class="tablenav-pages">';

        $current_url = menu_page_url('edit.php?post_type=form_submissions', false);
        
        echo paginate_links(array(
            'base'      => add_query_arg('paged', '%#%', $current_url),
            'format'    => '',
            'current'   => $paged,
            'total'     => $total_pages,
            'prev_text' => '&laquo; Anterior',
            'next_text' => 'Próximo &raquo;',
        ));

        echo '</div></div>';
    }

    echo '</div>'; // Fecha wrap
}

function override_form_submissions_menu() {
    remove_submenu_page('edit.php?post_type=form_submissions', 'edit.php?post_type=form_submissions');
    add_menu_page(
        'Formulário de Contato',
        'Contatos',
        'manage_options',
        'form_submissions_list',
        'render_form_submissions_admin_page',
        'dashicons-email',
        25
    );
}

add_action('admin_menu', 'override_form_submissions_menu', 999);
