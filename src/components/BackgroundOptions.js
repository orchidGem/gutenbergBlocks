const { ColorPalette, MediaUpload } = wp.editor;
const { PanelBody, PanelRow, RangeControl } = wp.components;

const BackgroundOptions = (props) => {

  const {customStyles, customClasses } = props;

  function updateBackgroundImage(value) {

    let image = value !== "" ? value.sizes.full.url : "";

    let newStyles = {...customStyles};
    newStyles.bkgImg = image !== "" ?
      `background-image: url(${image})` : null;

    let newClass = {...customClasses};
    newClass.hasBkgImg = image !== "" ?
      'has-bkg-img' : false;

    if (image === "") {
      newClass.hasBkgImgOpacity = false;
    }

    return {
      imageUrl: image,
      newStyles: newStyles,
      newClass: newClass
    };
  }

  function updateBkgImgOpacity(value) {
    let newClass = {...customClasses};
    newClass.hasBkgImgOpacity = value !== 10 ?
      `has-bkg-img-opacity-${value}` : false;

    return {
      rangeNumber: value,
      newClass: newClass
    };
  }

  function updateBackgroundColor(newColor) {
    const colorLibrary = {
      "#000000": "bg-black",
      "#FFFFFF": "bg-white",
      "#ffcb05": "bg-yellow"
    }

    let colorClass = newColor !== undefined ? colorLibrary[newColor] : false;
    let newClass = {...customClasses};
    newClass.bkgColor = colorClass

    return {
      newColor: newColor !== undefined ? newColor : null,
      newClass: newClass
    };
  }


  return ([
      <PanelBody title="Background Options">
          <h3>Background Color</h3>
          <ColorPalette
            value={props.bkgColor}
            onChange={(value) => props.handleBkgColorChange(updateBackgroundColor(value))}
          />

          <hr/>

          <h3>Background Image</h3>
          <MediaUpload
            type="image"
            onSelect={(value) => props.handleBkgImgChange(updateBackgroundImage(value))}
            render={({open}) => (
              <button
                onClick={open}
                className="components-button is-button is-default is-large"
              >
                {props.bkgImage ? "Replace Image" : "Select Image" }
              </button>
            )}
          />

          {
            props.bkgImg ? ([
              <button
                style={{'display': 'block', 'marginTop': '10px'}}
                className="components-button is-link is-destructive"
                onClick={(value) => props.handleBkgImgChange(updateBackgroundImage(""))}
              >
                  Remove Image
              </button>,<br/>,
              <RangeControl
                beforeIcon="arrow-left-alt2"
                afterIcon="arrow-right-alt2"
                label="Background Image Opacity"
                value={props.bkgImgOpacity}
                onChange={(value) => props.handleBkgImgOpacityChange(updateBkgImgOpacity(value))}
                min={1}
                max={10}
              />
            ])
              : ''
          }

      </PanelBody>
  ])
}

export default BackgroundOptions;
