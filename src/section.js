const { registerBlockType } = wp.blocks;

const {  InnerBlocks } = wp.editor;

registerBlockType('laura/section', {

  // built-in attributes
  title: 'Section',
  description: 'Section element',
  icon: 'format-image',
  category: 'layout',

  // custom attributes
  attributes: {

  },

  edit: props => {
    const { className } = props;

    return [
      <div style={{ 'border':'1px solid black' }} className = {className}>
        <InnerBlocks
                      allowedBlocks={['core/paragraph', 'core/image']}/>
      </div>
    ]
  },

  save: props => {
    return (
      <section>
        <InnerBlocks.Content />
      </section>
    )
  }

})
