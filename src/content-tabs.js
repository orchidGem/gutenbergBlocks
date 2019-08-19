const { registerBlockType, createBlock } = wp.blocks;
const { InspectorControls,InnerBlocks,BlockControls } = wp.editor;
const { PanelBody, SelectControl } = wp.components;
const { Fragment } = wp.element;

registerBlockType('laura/content-tabs', {

  title: 'Content Tabs',
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
    numTabsPerRow: {
      type: 'string',
      default: "3"
    },
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
        customClasses, customStyles, numTabsPerRow
      },
      className, setAttributes, clientId
    } = props;

    return [

      <InspectorControls style={{ marginBottom: '40px;' }}>
        <PanelBody>

          <Fragment>
            <button
              style={{marginBottom: '20px'}}
              onClick={ () => {
                let newBlock = createBlock( 'laura/content-tab' );
                let block = wp.data.select( 'core/block-editor' ).getBlocksByClientId( clientId );
                wp.data.dispatch( 'core/editor' ).insertBlock( newBlock, block[0].innerBlocks.length,clientId);
              } }
              className="components-button is-button is-default is-large"
            >
              Add Content Tab
            </button>
          </Fragment>

          <Fragment>
            <SelectControl
              label="Number of Tabs per Row"
              value={numTabsPerRow}
              options={[
                { value: "3", label: "3 in a row" },
                { value: "4", label: "4 in a row" },
              ]}
              onChange={value => setAttributes({ numTabsPerRow: value })}
            />
          </Fragment>

        </PanelBody>
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
        <InnerBlocks.Content />
    )
  }

})
