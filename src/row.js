const { registerBlockType,createBlock } = wp.blocks;
const { InspectorControls,InnerBlocks, AlignmentToolbar,BlockControls } = wp.editor;
const { RadioControl, PanelBody} = wp.components;
import BackgroundOptions from './components/BackgroundOptions';

registerBlockType('laura/row', {

  title: 'Row',
  description: 'Row element',
  icon: 'format-image',
  category: 'layout',
  parent: ['laura/container'],
  supports: {
    anchor: true,
    html: false,
    reusable: false,
    className: false,
    inserter: false
  },

  // custom attributes
  attributes: {
    bkgColor: {
      type: 'string',
      default: null
    },
    bkgImg: {
      type: 'string',
      default: ''
    },
    bkgImgOpacity: {
      type: 'number',
      default: 10
    },
    alignment: {
      type: 'string',
    },
    customClasses: {
      type: 'object',
      default: {
        hasBkgImg: false,
        hasBkgImgOpacity: false,
        bkgColor: false,
        alignment: false
      }
    },
    customStyles: {
      type: 'object',
      default: {
        bkgImg: null
      }
    }
  },

  edit: props => {
    const {
      attributes: {
        alignment, bkgColor, bkgImg,bkgImgOpacity, customClasses, customStyles
      },
      className, setAttributes, clientId
    } = props;

    function changeAlignment(alignment) {
      let newClass = {...customClasses};
      newClass.alignment = `text-${alignment}`;

      setAttributes({
        alignment: alignment,
        customClasses: newClass
      });
    }

    function changeBkgColor(value) {
      setAttributes({
        customClasses: value.newClass,
        bkgColor: value.newColor
      })
    }

    function changeBkgImg(value) {
      setAttributes({
        bkgImg: value.imageUrl,
        customClasses: value.newClass,
        customStyles: value.newStyles
      });
    }

    function changeBkgImgOpacity(value) {
      setAttributes({
        bkgImgOpacity: value.rangeNumber,
        customClasses: value.newClass
      });
    }

    function addColumn() {

    }

    return [

      <InspectorControls style={{ marginBottom: '40px;' }}>

        <BackgroundOptions
          bkgColor={bkgColor}
          handleBkgColorChange={bkgColor => changeBkgColor( bkgColor )}
          bkgImg={bkgImg}
          handleBkgImgChange={bkgImg => changeBkgImg( bkgImg )}
          bkgImgOpacity={bkgImgOpacity}
          handleBkgImgOpacityChange={bkgImgOpacity => changeBkgImgOpacity( bkgImgOpacity )}
          customStyles={customStyles}
          customClasses={customClasses}
        />

        <button
          onClick={ () => {
            let newBlock = createBlock( 'laura/column' );
            let row = wp.data.select( 'core/block-editor' ).getBlocksByClientId( clientId );
            wp.data.dispatch( 'core/editor' ).insertBlock( newBlock, row[0].innerBlocks.length,clientId);
          } }
          className="components-button is-button is-default is-large"
        >
          Add Column
        </button>

      </InspectorControls>,
      <div
        style={{
          backgroundImage: `url(${bkgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className = {`sisense-block-row  sisense-layout-block ${className}`}
      >
        <div className="blockTitle">
          Row
        </div>
        {
          <BlockControls>
              <AlignmentToolbar
                  value={ alignment }
                  onChange={ changeAlignment }
              />
          </BlockControls>
        }

        <InnerBlocks
          template={[['laura/column'],['laura/column']]}
          allowedBlocks={['laura/column']}
        />

        <button
          onClick={ () => {
            let newBlock = createBlock( 'laura/column' );
            let row = wp.data.select( 'core/block-editor' ).getBlocksByClientId( clientId );
            wp.data.dispatch( 'core/editor' ).insertBlock( newBlock, row[0].innerBlocks.length,clientId);
          } }
          className="components-button is-primary is-button is-default is-large btn-add"
        >
          Add Column
        </button>

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
