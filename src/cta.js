const { registerBlockType } = wp.blocks;

const {
  RichText,
  InspectorControls,
  ColorPalette
} = wp.editor;

const { PanelBody } = wp.components;
// same as writing
// import register from wp.blocks;

registerBlockType('laura/custom-cta', {

  // built-in attributes
  title: 'Call to Action',
  description: 'Block to generate custom call to action',
  icon: 'format-image',
  category: 'layout',

  // custom attributes
  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: 'h2'
    },
    titleColor: {
      type: 'string',
      default: 'black'
    },
    body: {
      type: 'string',
      source: 'html',
      selector: 'p'
    }
  },

  // built-in functions
  edit( { attributes, setAttributes } ) {

    const {
      title,
      titleColor,
      body
    } = attributes;

    function onChangeTitle(newTitle) {
      setAttributes({
        title: newTitle
      })
    }

    function onChangeBody(newBody) {
      setAttributes({
        body: newBody
      })
    }

    function onTitleColorChange(newColor) {
      setAttributes({
        titleColor: newColor
      })
    }


    return ([

      <InspectorControls style={{ marginBottom: '40px' }} >
        <PanelBody title={ 'Font Color Settings' }>
          <p><strong>Select a Title Color:</strong></p>
          <ColorPalette value={titleColor}
                        onChange={onTitleColorChange}

          />
        </PanelBody>
      </InspectorControls>,

      <div class="cta-container">
        <RichText key="editable"
                  tagName="h2"
                  placeholder="Your CTA Title"
                  value={ title }
                  onChange={ onChangeTitle }
                  style={ { color: titleColor } }
        />
        <RichText key="editable"
                  tagName="p"
                  placeholder="Your CTA Description"
                  value={ body }
                  onChange={ onChangeBody }
        />
      </div>
    ]);
  },

  save( { attributes } ) {

    const {
      title,
      titleColor,
      body
    } = attributes;

    return (
      <div class="cta-container">
        <h2 style={{ color: titleColor }}>{ title }</h2>
        <RichText.Content tagName="p"
                          value= { body }
        />
      </div>
    )
  }


});
