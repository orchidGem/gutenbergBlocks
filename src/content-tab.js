const { registerBlockType, createBlock } = wp.blocks;
const { InspectorControls,InnerBlocks,MediaUpload,RichText } = wp.editor;
const { PanelBody} = wp.components;

registerBlockType('laura/content-tab', {

  title: 'Content tab',
  description: 'Content tab',
  icon: 'format-image',
  category: 'layout',
  parent: ['laura/content-tabs'],
  supports: {
    anchor: true,
    html: false,
    reusable: false,
    className: false,
    inserter: false
  },

  // custom attributes
  attributes: {
    icon: {
      type: 'string',
      default: null
    },
    title: {
      type: 'string'
    },
    description: {
      type: 'string'
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

  getEditWrapperProps( attributes ) {
    const { customClasses } = attributes;
    return {
      'data-column-size': 'col-md-6'
    }
  },

  edit: props => {
    const {
      attributes: {
        customClasses, customStyles, title, description, icon
      },
      className, setAttributes, clientId
    } = props;

    return [

      <InspectorControls style={{ marginBottom: '40px;' }}>


      </InspectorControls>,
      <div
        className = {`sisense-block-content-tab  sisense-layout-block ${className}`}
      >
        <div className="blockTitle">
          Content Tab
        </div>

        <div className="tab">
          <MediaUpload
            onSelect={(value) => {setAttributes({icon: value.sizes.full.url})}}
            value={icon}
            render={ ({open}) => {
              return <img
                      src={icon ? icon : 'https://via.placeholder.com/150'}
                      onClick={open}
                     />;
            }}
          />

          <RichText
            format='string'
            tagName="h3"
            placeholder="Title"
            value={ title }
            onChange={(value) => {setAttributes({title: value})}}
          />
          <RichText
            format="string"
            tagName="p"
            placeholder="Description"
            value={ description }
            onChange={(value) => {setAttributes({description: value})}}
          />
        </div>


        <InnerBlocks
          style={{display: 'none !important'}}
          template={[
            ['laura/column', { customClasses: {size: 'col-md-6'}},
              [
                [ 'core/heading', { level: 3, placeholder: 'Enter heading' } ],
                [ 'core/paragraph', { fontSize: 'large', placeholder: 'Enter sub-heading' } ],
                [ 'core/paragraph' ]
              ]
            ],
            ['laura/column', { customClasses: {size: 'col-md-6'}}]
          ]}
          allowedBlocks={['laura/column']}
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
