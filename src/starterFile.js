const { registerBlockType } = wp.blocks;

const {  InnerBlocks } = wp.editor;

registerBlockType('laura/{name}', {

  // built-in attributes
  title: '{name}',
  description: '{text}',
  icon: 'format-image',
  category: 'layout',

  // custom attributes
  attributes: {

  },

  edit: props => {
    const { className } = props;

    return (

    );
  },

  save: props => {
    return ;
  }

})
