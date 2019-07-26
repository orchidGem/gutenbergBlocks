const { registerBlockType } = wp.blocks;
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
    author: {
      type: 'string'
    }
  },

  // built-in functions
  edit( { attributes, setAttributes } ) {

    function updateAuthor(event) {
      setAttributes({
        author: event.target.value
      })
    }


    return <input value={attributes.author} onChange={ updateAuthor } type="text" />
  },

  save( {attributes} ) {
    return <p>Author Name: {attributes.author}</p>
  }


});
