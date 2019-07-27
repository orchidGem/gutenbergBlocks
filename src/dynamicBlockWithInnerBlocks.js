const { registerBlockType } = wp.blocks;

const {  InnerBlocks } = wp.editor;

registerBlockType('laura/dynamicinner', {

  // built-in attributes
  title: 'Dynamic Block with Inner Blocks',
  description: 'Dynamic',
  icon: 'format-image',
  category: 'layout',

  // custom attributes
  attributes: {
    title: {
      type: 'string'
    }
  },

  edit: props => {
    const { className } = props;

    function updateTitle(e) {
      props.setAttributes( {
        title: e.target.value
      });
    }


    console.log( props.attributes );

    return [
      <div style={{ 'border':'1px solid black' }} className = {className}>

        <input type="text" value={props.attributes.title} onChange={updateTitle} />

        <InnerBlocks />
      </div>
    ]
  },

  save: props => {
    return <InnerBlocks.Content />;
  }

})
