const { registerBlockType, createBlock } = wp.blocks;
const { InnerBlocks, InspectorControls } = wp.editor;
const { PanelBody, Tooltip, Dashicon, Button } = wp.components;
const { Fragment } = wp.element;

registerBlockType('laura/cards', {

  title: 'Cards',
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

    function addBlock() {
      let newBlock = createBlock( 'laura/card' );
      let block = wp.data.select( 'core/block-editor' ).getBlocksByClientId( clientId );
      wp.data.dispatch( 'core/editor' ).insertBlock( newBlock, block[0].innerBlocks.length,clientId);
    }

    return [
      <InspectorControls style={{ marginBottom: '40px;' }}>
        <PanelBody>

          <Fragment>
            <button
              style={{marginBottom: '20px'}}
              onClick={ addBlock }
              className="components-button is-button is-default is-large"
            >
              Add Card
            </button>
          </Fragment>

        </PanelBody>
      </InspectorControls>,
      <div
        className = {`sisense-block-cards sisense-layout-block ${className}`}
      >
        <div className="blockTitle">
          Cards
          <Tooltip text="Add Card">
            <Button
              onClick={addBlock}
            >
              <Dashicon icon="plus"/>
            </Button>
        	</Tooltip>
        </div>

        <InnerBlocks
          template={[['laura/card']]}
          allowedBlocks={['laura/card']}
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

    return (
      <div className="content-deck">
        <InnerBlocks.Content />
      </div>
    )
  }

})
