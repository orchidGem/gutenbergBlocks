const { registerBlockType } = wp.blocks;
const { InspectorControls,InnerBlocks, AlignmentToolbar,BlockControls } = wp.editor;
const { SelectControl, PanelBody} = wp.components;
import BackgroundOptions from './components/BackgroundOptions';

registerBlockType('laura/column', {

  title: 'Column',
  description: 'Column element',
  icon: 'format-image',
  category: 'layout',
  parent: ['laura/row'],
  supports: {
    anchor: true,
    html: false,
    reusable: false
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
        size: 'col-md-12'
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

    return [

      <InspectorControls style={{ marginBottom: '40px;' }}>

        <PanelBody title="Column Sizes">
          <SelectControl
            label="Column Size"
            value={customStyles.size}
            options={[
              { value: "col-md-1", label: "1/12" },
              { value: "col-md-2", label: "2/12" },
              { value: "col-md-3", label: "3/12"},
              { value: "col-md-4", label: "4/12"},
              { value: "col-md-5", label: "5/12"},
              { value: "col-md-6", label: "6/12"},
              { value: "col-md-7", label: "7/12"},
              { value: "col-md-8", label: "8/12"},
              { value: "col-md-9", label: "9/12"},
              { value: "col-md-10", label: "10/12"},
              { value: "col-md-11", label: "11/12"},
              { value: "col-md-12", label: "12/12"},
            ]}
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
        className = {className}
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
          allowedBlocks={['core/paragraph']}
        />
      </div>
    ]
  },

  save: props => {
    const { customClasses, customStyles } = props.attributes;

    let styles = Object.values(customStyles).toString(),
        classes = Object.values(customClasses).filter(Boolean).join(" ");

    classes = `row ${classes}`;

    return (
      <div className={classes} style={styles}>
        <InnerBlocks.Content />
      </div>
    )
  }

})
