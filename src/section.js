const { registerBlockType } = wp.blocks;
const { InspectorControls, InnerBlocks, AlignmentToolbar,BlockControls } = wp.editor;
import BackgroundOptions from './components/BackgroundOptions';

const TEMPLATE = [
  ['core/paragraph', { placeholder: 'write text here' }],
  ['laura/container']
];

registerBlockType('laura/section', {

  title: 'Section',
  description: 'Section element',
  icon: 'format-image',
  category: 'layout',
  parent: ['laura/section'],
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
          template={TEMPLATE}
        />
      </div>
    ]
  },

  save: props => {
    const { customClasses, customStyles } = props.attributes;

    let styles = Object.values(customStyles).toString(),
        classes = Object.values(customClasses).filter(Boolean).join(" ");

    return (
      <section className={classes} style={styles}>
        <InnerBlocks.Content />
      </section>
    )
  }

})
