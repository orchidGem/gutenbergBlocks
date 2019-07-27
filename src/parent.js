const { registerBlockType } = wp.blocks;

const {  InnerBlocks } = wp.editor;

registerBlockType('laura/parent', {

  // built-in attributes
  title: 'Parent',
  description: 'Parent element',
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
                      allowedBlocks={['laura/child', 'core/image']}
        />
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
