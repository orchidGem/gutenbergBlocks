const { ColorPalette, MediaUpload } = wp.editor;
const { PanelBody, PanelRow } = wp.components;

const BackgroundOptions = (props) => {

  function updateBackgroundImage(image) {
    return image.sizes.full.url;
  }

  return ([
      <PanelBody title="Background Options">
          <h3>Background Color</h3>
          <ColorPalette />

          <hr/>

          <h3>Background Image</h3>
          <MediaUpload
            type="image"
            onSelect={(value) => props.handleColorChange(updateBackgroundImage(value))}
            render={({open}) => (
              <button
                onClick={open}
                className="components-button is-button is-default is-large"
              >
                Select Image
              </button>
            )}
          />
      </PanelBody>
  ])
}

export default BackgroundOptions;
