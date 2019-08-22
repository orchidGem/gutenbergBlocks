<?php

function laura_gutenberg_colors()
{
  add_theme_support(
    'editor-color-palette',
    array(
      array(
        'name' => 'White',
        'slug' => 'white',
        'color' => '#ffffff'
      ),
      array(
        'name' => 'Black',
        'slug' => 'black',
        'color' => '#000000'
      ),
      array(
        'name' => 'Yellow',
        'slug' => 'yellow',
        'color' => '#ffcb05'
      )
    )
  );
}

add_action('init', 'laura_gutenberg_colors');

function laura_gutenberg_font_size()
{
  add_theme_support(
    'editor-font-sizes',
    array(
      array(
        'name' => 'Small',
        'slug' => 'small',
        'size' => 14
      ),
      array(
        'name' => 'Normal',
        'slug' => 'normal',
        'size' => 18
      ),array(
        'name' => 'Large',
        'slug' => 'large',
        'size' => 24
      ),
      array(
        'name' => 'Huge',
        'slug' => 'huge',
        'size' => 30
      ),
    )
  );
}

add_action('init', 'laura_gutenberg_font_size');

/*
* Enqueue styles in back end
*/
function ss_enqueue_editor_styles() {
    add_theme_support('editor-styles');

    add_theme_support( 'align-wide' );

    add_theme_support( 'disable-custom-colors' );


    // Enqueue editor styles.
    add_editor_style( get_template_directory_uri() . '/style-custom-editor.css');
}

add_action( 'after_setup_theme', 'ss_enqueue_editor_styles' );

// register all blocks here
function laura_gutenberg_blocks() {

  wp_register_script(
    'laura-blocks',
    get_template_directory_uri() . '/build/index.js', array( 'wp-blocks', 'wp-editor', 'wp-components' )
  );

  $blocks = array(
    'custom-cta',
    'section',
    'parent',
    'child',
    'gutenberg',
    'container',
    'row',
    'column',
    'card',
    'cards',
    'link-button'
  );

  foreach ($blocks as $key => $block) {
    register_block_type(
      'laura/' . $block,
      array(
        'editor_script' => 'laura-blocks'
      )
    );
  } // endforeach


  // dynamic blocks
  register_block_type(
    'laura/dynamic',
    array(
      'editor_script' => 'laura-blocks',
      'render_callback' => 'render_posts_block'
    )
  );

  register_block_type(
    'laura/dynamicinner',
    array(
      'editor_script' => 'laura-blocks',
      'render_callback' => 'render_dynamic_with_inner'
    )
  );

  register_block_type(
    'laura/content-tab',
    array(
      'editor_script' => 'laura-blocks',
      'render_callback' => 'render_content_tab'
    )
  );

  register_block_type(
    'laura/content-tabs',
    array(
      'editor_script' => 'laura-blocks',
      'render_callback' => 'render_content_tabs'
    )
  );

  register_block_type(
    'laura/hero-banner',
    array(
      'editor_script' => 'laura-blocks',
      'render_callback' => 'render_hero_banner'
    )
  );
}

add_action('init', 'laura_gutenberg_blocks');


function render_posts_block( $attributes ) {

  $posts = get_posts([
    'category' => $attributes['selectedCategory'],
    'posts_per_page' => $attributes['postsPerPage']
  ]);


  ob_start();
  echo "<div class='posts-by-category'>";
  foreach ($posts as $post) {
    echo "<div>";
    echo "<h2>$post->post_title</h2>";
    echo get_the_category_list(', ', '', $post->ID);
    echo get_the_post_thumbnail($post->ID);
    echo "<p>$post->post_excerpt</p>";
    echo "<hr>";
    echo "</div>";
  }
  echo "</div>";

  return ob_get_clean();

}

function render_dynamic_with_inner( $attributes, $content ) {

  ob_start();

  echo "attributes: ";
  var_dump($attributes);

  echo "content: ";
  var_dump($content);


  return ob_get_clean();

}

function render_content_tab( $attributes, $content ) {

  ob_start();

  ?>

  <div class="col-xs-12 col-sm-4 info-box">

    <div>
      <?php if(!is_null($attributes['icon'])) : ?>
        <img src="<?= $attributes['icon'] ?>" alt="">
      <?php endif; ?>
      <h4><?= $attributes['title'] ?></h4>
      <?php if(!is_null($attributes['description'])) : ?>
        <p><?= $attributes['description'] ?></p>
      <?php endif; ?>
    </div>

    <noscript>
      <div class="content-tab-details">
        <?= $content ?>
      </div>
    </noscript>

  </div> <!-- .info-box -->

  <?php

  return ob_get_clean();

}

function render_content_tabs( $attributes, $content ) {

  ob_start();

  ?>

  <div class="content-tabs" data-column-size=<?= $attributes['numTabsPerRow'] ?>>
    <div class="row">
      <?= $content ?>
    </div>
  </div>

  <?php
  return ob_get_clean();

}

function render_hero_banner( $attributes, $content ) {

  ob_start();

  include(TEMPLATEPATH . '/template-parts/blocks/hero-banner.php');

  return ob_get_clean();

}



function register_acf_block_types() {

    acf_register_block_type(array(
        'name'              => 'cta-blocks',
        'title'             => __('CTA Blocks'),
        'description'       => __('A custom cta block.'),
        'render_template'   => 'template-parts/blocks/cta-blocks.php',
        'category'          => 'formatting',
        'icon'              => 'admin-comments',
        'keywords'          => array( 'cta' ),
    ));

    acf_register_block_type(array(
        'name'              => 'dashboard-example-lightbox',
        'title'             => __('Dashboard Example Lightbox'),
        'description'       => __('Dashboard Example Lightbox'),
        'render_template'   => 'template-parts/blocks/dashboard-example-lightbox.php',
        'category'          => 'formatting',
        'icon'              => 'admin-comments',
        'keywords'          => array( 'dashboard', 'example', 'lightbox' ),
    ));
}

// Check if function exists and hook into setup.
if( function_exists('acf_register_block_type') ) {
    add_action('acf/init', 'register_acf_block_types');
}
