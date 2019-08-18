<?php

/**
 * CTA Block Template
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'cta-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'cta';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}

$cta_blocks = get_field('cta_blocks');
if($cta_blocks)
{ ?>

	<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">

  <?php foreach($cta_blocks as $cta_block) : ?>

		<?php // Load values and assing defaults.
    $icon = $cta_block['icon'] ?: 'https://via.placeholder.com/150';
    $title = $cta_block['title'] ?: 'Title';
    $description = $cta_block['description'] ?: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
    $url = $cta_block['url'] ?: '';
    $cta_text = $cta_block['cta_text'] ?: 'Read More';
    ?>

    <div class="cta-block">
      <div class="icon" style="background-image:url(<?= $icon ?>)"></div>
      <p>
        <strong>
          <?= $title ?>
        </strong>
      </p>
      <p>
        <?= $description ?>
      </p>
      <a href="<?= $url ?>" class="action-btn"><?= $cta_text ?></a>
    </div>

	<?php endforeach; ?>
	</div>

  <?php
}

?>
