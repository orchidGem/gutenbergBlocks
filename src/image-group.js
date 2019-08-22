const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

registerBlockType('laura/image-group', {

  title: 'Image Group',
  icon: 'images-alt',
  category: 'common',
  supports: {
    anchor: true,
    html: false,
    reusable: false,
    className: false
  },

  // custom attributes
  attributes: {
    customClasses: {
      type: 'object',
      default: {
        style: ''
      }
    }
  },

  edit: props => {
    const {
      attributes: {
        customClasses, customStyles
      },
      className, setAttributes, clientId
    } = props;


    return ([
      <div
        className = {`sisense-block-image-group ${className}`}
      >
        <InnerBlocks
          template={[['core/image'], ['core/image'],['core/image']]}
          allowedBlocks={['core/image']}
        />
      </div>
    ])
  },

  save: props => {
    const { customClasses } = props.attributes;

    let classes = Object.values(customClasses).filter(Boolean).join(" ");

    return (
      <div className={`image-group ${classes}`}>
        <InnerBlocks.Content />
      </div>
    )
  }

})
