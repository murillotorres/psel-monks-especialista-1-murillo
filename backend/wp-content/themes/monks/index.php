<?php get_header(); ?>
<div class="page-header">
    <div class="container">
        <h1><?php the_title(); ?></h1>
    </div>
</div>

<div class="container mt-5">
    <div class="page-text">
        <?php the_content(); ?>
    </div>
</div>


<?php get_footer(); ?>