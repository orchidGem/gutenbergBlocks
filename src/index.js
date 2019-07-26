const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;
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


    return ([
      <div class="cta-container">
        <RichText key="editable"
                  tagName="h2"
                  placeholder="Your CTA Title"
                  value={ title }
                  onChange={ onChangeTitle }
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
      body
    } = attributes;

    return (
      <div class="cta-container">
        <h2>{ title }</h2>
        <RichText.Content tagName="p"
                          value= { body }
        />
      </div>
    )
  }


});
