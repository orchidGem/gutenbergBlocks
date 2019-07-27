const { registerBlockType } = wp.blocks;

const {  InnerBlocks, InspectorControls, MediaUpload } = wp.editor;

const { PanelBody } = wp.components;

registerBlockType('laura/hero-banner', {

  // built-in attributes
  title: 'Hero Banner',
  description: 'Hero Banner',
  icon: 'format-image',
  category: 'layout',

  // custom attributes
  attributes: {
    backgroundImage: {
      type: 'string',
      default: ''
    },
  },

  edit: props => {
    const { className } = props;

    function updateBackgroundImage(image) {
      props.setAttributes( {
        backgroundImage: image.sizes.full.url
      });
    }


    return [

      <InspectorControls style={{ marginBottom: '40px' }} >
        <PanelBody title={ 'Background Settings' }>
          <p><strong>Background Image:</strong></p>

          <MediaUpload
            onSelect={updateBackgroundImage}
            type="image"
            value={ props.attributes.backgroundImage }
            render={({open}) => (
              <button
                onClick={open}
                className="components-button is-button is-default is-large"
              >
                  Upload Image!
              </button>
            )}
          />

        </PanelBody>
      </InspectorControls>,

      <div
        style={{
          border:'1px solid black',
          backgroundImage: `url(${props.attributes.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className = {className}
      >

        <InnerBlocks />
      </div>
    ]
  },

  save: props => {
    return <InnerBlocks.Content />;
  }

})
