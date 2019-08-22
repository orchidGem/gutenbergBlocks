const { registerBlockType } = wp.blocks;
const { RichText, URLInput, InspectorControls } = wp.editor;
const { PanelBody, SelectControl, Button } = wp.components;

registerBlockType('laura/link-button', {

  title: 'Link Button',
  icon: 'format-image',
  category: 'common',
  supports: {
    anchor: true,
    html: false,
    reusable: false,
    className: false
  },

  // custom attributes
  attributes: {
    url: {
      type: 'string',
      source: 'attribute',
      attribute: 'href',
      selector: 'a',
    },
    text: {
      type: 'string',
      default: null
    },
    target: {
      type: 'string'
    },
    rel: {
      type: 'string'
    },
    customClasses: {
      type: 'object',
      default: {
        style: ''
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
        customClasses, customStyles, url, text, target, rel
      },
      className, setAttributes, clientId
    } = props;


    function updateButtonStyle(value) {

      let newClass = {...customClasses};
      newClass.style = value;

      setAttributes({
        customClasses: newClass
      })
    }

    return ([
      <InspectorControls style={{ marginBottom: '40px;' }}>

        <PanelBody title="Style">

            <Button
              isDefault
              style={{backgroundColor: '#ffcb05', border: '1px solid black', margin: '2px'}}
              onClick = {() => { updateButtonStyle("") }}
            >
                Default
            </Button>
            <Button
              isDefault
              style={{backgroundColor: 'black',color: 'white', margin: '2px', border: '1px solid black'}}
              onClick = {() => { updateButtonStyle("btn-black") }}
            >
                Black
            </Button>
            <Button
              isDefault
              style={{backgroundColor: 'white', border: '1px solid black', margin: '2px'}}
              onClick = {() => { updateButtonStyle("btn-white") }}
            >
                White
            </Button>
            <Button
              isDefault
              style={{backgroundColor: 'transparent', border: '1px solid black', margin: '2px'}}
              onClick = {() => { updateButtonStyle("btn-trans") }}
            >
                Transparent w/Black Border
            </Button>
            <Button
              isDefault
              style={{backgroundColor: 'transparent', border: '1px solid black', margin: '2px'}}
              onClick = {() => { updateButtonStyle("btn-transparent-white") }}
            >
                Transparent w/White Border
            </Button>
        </PanelBody>

        <PanelBody title="Attributes">
          <SelectControl
            label="Target"
            value={ target }
            options={[
              { value: "", label: "" },
              { value: "_blank", label: "_blank" },
              { value: "_parent", label: "_parent" },
              { value: "_self", label: "_self"},
              { value: "_top", label: "_top"},
            ]}
            onChange={(value) => {setAttributes({ target: value })}}
          />

          <SelectControl
            label="Rel"
            value={ rel }
            options={[
              { value: "", label: "" },
              { value: "alternate", label: "alternate" },
              { value: "author", label: "author" },
              { value: "bookmark", label: "bookmark"},
              { value: "external", label: "external"},
              { value: "help", label: "help"},
              { value: "license", label: "license"},
              { value: "next", label: "next"},
              { value: "nofollow", label: "nofollow"},
              { value: "noreferrer", label: "noreferrer"},
              { value: "noopener", label: "noopener"},
              { value: "prev", label: "prev"},
              { value: "search", label: "search"},
              { value: "tag", label: "tag"},
            ]}
            onChange={(value) => {setAttributes({ rel: value })}}
          />
        </PanelBody>

      </InspectorControls>,

      <div
        className = {`sisense-block-link-button ${className}`}
      >
          <RichText
            className={`action-btn ${customClasses.style}`}
            tagName="a"
            placeholder="Link Text"
            value={ text }
            onChange={(value) => {setAttributes({ text: value })}}
          />
            <URLInput
                className="url"
                value={ url }
                isFullWidth
                hasBorder
                onChange={ value => setAttributes( { url: value } ) }
            />


      </div>
    ])
  },

  save: props => {
    const { customClasses, customStyles, url, text, target, rel } = props.attributes;

    let classes = Object.values(customClasses).filter(Boolean).join(" ");

    return (
      <RichText.Content
				tagName="a"
				className={`action-btn ${classes}`}
				href={ url }
				value={ text }
				target={ target }
        rel = { rel }
			/>
    )
  }

})
