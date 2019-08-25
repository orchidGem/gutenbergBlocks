/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { Fragment }	= wp.element;
const { InspectorAdvancedControls }	= wp.editor;
const { createHigherOrderComponent } = wp.compose;

/**
 * Add custom attribute for mobile visibility.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */
function addAttributes( settings ) {

  if( typeof settings.attributes !== 'undefined' ){

  		settings.attributes = Object.assign( settings.attributes, {
  			advancedAttributes:{
  				type: 'string'
  			}
  		});

  	}

  	return settings;
}

/**
 * Add mobile visibility controls on Advanced Block Panel.
 *
 * @param {function} BlockEdit Block edit component.
 *
 * @return {function} BlockEdit Modified block edit component.
 */
const withAdvancedControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {

		const {
			name,
			attributes,
			setAttributes,
			isSelected,
		} = props;

		const {
			advancedAttributes,
		} = attributes;


		return (
			<Fragment>
				<BlockEdit {...props} />
				{ isSelected &&
					<InspectorAdvancedControls>
            <label htmlFor="advancedAttributes">Advanced Attributes</label>
            <input
              type="text"
              value={advancedAttributes}
              placeholder="data-custom=a data-test=ie"
              onChange={ (e) => setAttributes( {  advancedAttributes: e.target.value } ) }
            />
					</InspectorAdvancedControls>
				}

			</Fragment>
		);
	};
}, 'withAdvancedControls');

/**
 * Add custom element class in save element.
 *
 * @param {Object} extraProps     Block element.
 * @param {Object} blockType      Blocks object.
 * @param {Object} attributes     Blocks attributes.
 *
 * @return {Object} extraProps Modified block element.
 */
function applyExtraClass( extraProps, blockType, attributes ) {

	const { advancedAttributes } = attributes;

  if ( typeof advancedAttributes !== 'undefined' ) {

    let attrsArray = advancedAttributes.split(" ");

    attrsArray.forEach(function(attr) {
      let attrArray = attr.split("=");
      extraProps[`${attrArray[0]}`] = attrArray[1];
    })
	}

	return extraProps;
}

//add filters

addFilter(
	'blocks.registerBlockType',
	'editorskit/custom-attributes',
	addAttributes
);

addFilter(
	'editor.BlockEdit',
	'editorskit/custom-advanced-control',
	withAdvancedControls
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'editorskit/applyExtraClass',
	applyExtraClass
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'editorskit/applyExtraClass',
	applyExtraClass
);
