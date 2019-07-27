const { registerBlockType } = wp.blocks;

registerBlockType('laura/child', {

  // built-in attributes
  title: 'Child',
  description: 'Child element',
  icon: 'format-image',
  category: 'layout',
  parent: ['laura/parent'],

  edit: props => {
    const { className } = props;

    return [
      <p>child element</p>
    ]
  },

  save: props => {
    return (
      <p>child element</p>
    )
  }

})
