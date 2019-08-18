const { registerBlockType } = wp.blocks;
const { InspectorControls,InnerBlocks, AlignmentToolbar,BlockControls } = wp.editor;
const { RadioControl, PanelBody} = wp.components;
import BackgroundOptions from './components/BackgroundOptions';

registerBlockType('laura/container', {

  title: 'Container',
  description: 'Container element',
  icon: 'format-image',
  category: 'layout',
  parent: ['laura/section'],
  supports: {
    anchor: true,
    html: false,
    reusable: false,
    className: false
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
        alignment: false,
        widthSize: 'container'
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
      className, setAttributes
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

    function changeWidthSize(value) {
      let newClass = {...customClasses};
      newClass.widthSize = value;

      setAttributes({
        customClasses: newClass
      })
    }

    return [

      <InspectorControls style={{ marginBottom: '40px;' }}>

        <PanelBody title="Width Settings">
          <RadioControl
            label="Width Size"
            selected={customClasses.widthSize}
            options={[
              { label: "Fixed Width", value: "container" },
              { label: "Full Width", value: "container-fluid" }
            ]}
            onChange={value => changeWidthSize( value )}
          />
        </PanelBody>

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

      </InspectorControls>,
      <div
        style={{
          backgroundImage: `url(${bkgImg})`,
          border: '5px dashed #cbcbcb',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className = {`sisense-block-container ${customClasses.widthSize}`}
      >
        {
          <BlockControls>
              <AlignmentToolbar
                  value={ alignment }
                  onChange={ changeAlignment }
              />
          </BlockControls>
        }

        <InnerBlocks
          template={[['laura/row']]}
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
      <div className={classes} style={styles}>
        <InnerBlocks.Content />
      </div>
    )
  }

})
