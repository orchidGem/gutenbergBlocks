const { registerBlockType, createBlock } = wp.blocks;
const { InspectorControls,InnerBlocks,BlockControls } = wp.editor;
const { PanelBody} = wp.components;

registerBlockType('laura/content-tabs', {

  title: 'Content Tabs',
  description: 'Content Tabs',
  icon: 'format-image',
  category: 'layout',
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
      }
    },
    customStyles: {
      type: 'object',
      default: {
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

    return [

      <InspectorControls style={{ marginBottom: '40px;' }}>

        <button
          onClick={ () => {
            let newBlock = createBlock( 'laura/content-tab' );
            let block = wp.data.select( 'core/block-editor' ).getBlocksByClientId( clientId );
            wp.data.dispatch( 'core/editor' ).insertBlock( newBlock, block[0].innerBlocks.length,clientId);
          } }
          className="components-button is-button is-default is-large"
        >
          Add Content Tab
        </button>

      </InspectorControls>,
      <div
        className = {`sisense-block-content-tabs  sisense-layout-block ${className}`}
      >
        <div className="blockTitle">
          Content Tabs
        </div>

        <InnerBlocks
          template={[['laura/content-tab']]}
          allowedBlocks={['laura/content-tab']}
        />
      </div>
    ]
  },

  save: props => {
    const { customClasses, customStyles } = props.attributes;

    let styles = Object.values(customStyles).toString(),
        classes = Object.values(customClasses).filter(Boolean).join(" ");

    if (styles.length === 0) styles = false;
    if (classes.lenth === 0) classes = false;

    classes = `row ${classes}`;

    return (
      <div className={classes} style={styles}>
        <InnerBlocks.Content />
      </div>
    )
  }

})
