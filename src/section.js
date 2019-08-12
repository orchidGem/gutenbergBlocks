const { registerBlockType } = wp.blocks;

const { InspectorControls, InnerBlocks, AlignmentToolbar,BlockControls } = wp.editor;

import BackgroundOptions from './components/BackgroundOptions';

const TEMPLATE = [
  ['core/paragraph', { placeholder: 'write text here' }],
  ['core/image']
];

registerBlockType('laura/section', {

  // built-in attributes
  title: 'Section Testing',
  description: 'Section element',
  icon: 'format-image',
  category: 'layout',
  supports: {
    anchor: true,
    html: false,
    reusable: false
  },

  // custom attributes
  attributes: {
    backgroundImg: {
      type: 'string',
      default: ''
    },
    alignment: {
      type: 'string',
    }
  },

  edit: props => {
    const { attributes: { alignment, backgroundImg }, className, setAttributes } = props;

    const onChangeAlignment = ( newAlignment ) => {
            props.setAttributes( { alignment: newAlignment === undefined ? 'none' : newAlignment } );
        };

    function changeBackgroundColor(image) {
      console.log(image);
    }

    return [

      <InspectorControls style={{ marginBottom: '40px;' }}>

        <BackgroundOptions
          value={backgroundImg}
          handleColorChange={backgroundImg => setAttributes({ backgroundImg })}
        />

      </InspectorControls>,
      <div
        style={{
          backgroundImage: `url(${backgroundImg})`,
          border: '5px dashed #cbcbcb',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className = {className}>

      {
                  <BlockControls>
                      <AlignmentToolbar
                          value={ alignment }
                          onChange={ onChangeAlignment }
                      />
                  </BlockControls>
              }

        <InnerBlocks
                      allowedBlocks={['core/paragraph', 'core/image']}
                      template={TEMPLATE}
                      templateLock = "all"
        />
      </div>
    ]
  },

  save: props => {
    return (
      <section>
        <InnerBlocks.Content />
      </section>
    )
  }

})
