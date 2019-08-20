const { registerBlockType } = wp.blocks;
const { MediaUpload,RichText, URLInput } = wp.editor;
const { PanelBody} = wp.components;

registerBlockType('laura/card', {

  title: 'Card',
  icon: 'format-image',
  category: 'layout',
  parent: ['laura/cards'],
  supports: {
    anchor: true,
    html: false,
    reusable: false,
    className: false,
    inserter: false
  },

  // custom attributes
  attributes: {
    url: {
      type: 'string',
      source: 'attribute',
      attribute: 'href',
      selector: 'a',
    },
    icon: {
      type: 'string',
      default: null
    },
    content: {
      source: 'html',
      selector: 'p'
    },
    cta: {
      source: 'html',
      selector: 'span'
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
        customClasses, customStyles, icon, content, cta, url
      },
      className, setAttributes, clientId
    } = props;

    return (
      <div
        className = {`sisense-block-card  sisense-layout-block ${className}`}
      >
          <MediaUpload
            onSelect={(value) => {setAttributes({icon: value.sizes.full.url})}}
            value={icon}
            render={ ({open}) => {
              return <img
                      style={{cursor: 'pointer'}}
                      src={icon ? icon : 'https://via.placeholder.com/150'}
                      onClick={open}
                     />;
            }}
          />

          <RichText
            tagName="p"
            placeholder="Description"
            value={ content }
            onChange={(value) => {setAttributes({content: value})}}
          />
          <RichText
            tagName="span"
            placeholder="CTA Text"
            value={ cta }
            onChange={(value) => {setAttributes({cta: value})}}
          />
          <URLInput
              className="url"
              value={ url }
              onChange={ value => setAttributes( { url: value } ) }
          />

      </div>
    )
  },

  save: props => {
    const { customClasses, customStyles, icon, content, cta, url } = props.attributes;

    let styles = Object.values(customStyles).toString(),
        classes = Object.values(customClasses).filter(Boolean).join(" ");

    if (styles.length === 0) styles = false;
    if (classes.lenth === 0) classes = false;

    return (
      <a className="card" href={url}>
        <div className="icon">
          <img src={icon}/>
        </div>
        <RichText.Content tagName="p" value={ content } />
        <RichText.Content tagName="span" value={ cta }  className="cta"/>
      </a>
    )
  }

})
