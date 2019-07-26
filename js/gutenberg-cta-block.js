const { registerBlockType } = wp.blocks;
// same as writing
// import register from wp.blocks;

registerBlockType('laura/custom-cta', {

  // built-in attributes
  title: 'Call to Action',
  description: 'Block to generate custom call to action',
  icon: 'format-image',
  category: 'layout',

  // custom attributes
  attributes: {

  },

  // custom functions

  // built-in functions
  edit() {

  },

  save() {

  }


});
