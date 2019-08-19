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
      default: 'https://via.placeholder.com/150'
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
      'data-column-size': 'col-md-4'
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
        style={{textAlign: 'center'}}
      >
        <div className="blockTitle">
          Content Tab
        </div>

        <MediaUpload
            onSelect={(value) => {setAttributes({icon: value.sizes.full.url})}}
            value={icon}
            render={ ({open}) => {
              return <img
                      width="150"
                      src={icon}
                      onClick={open}
                      style={{cursor: 'pointer'}}
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

        <InnerBlocks
          template={[
            ['laura/column', { customClasses: {size: 'col-md-6'}}],
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
