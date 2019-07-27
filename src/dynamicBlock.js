const { registerBlockType } = wp.blocks;

const {  InnerBlocks } = wp.editor;

registerBlockType('laura/dynamic', {

  // built-in attributes
  title: 'Dynamic',
  description: 'Dynamic',
  icon: 'format-image',
  category: 'layout',

  // custom attributes
  attributes: {
    categories: {
      type: 'object'
    },
    selectedCategory: {
      type: 'string'
    },
    postsPerPage: {
      type: 'string'
    }
  },

  edit: props => {
    const { className } = props;

    // fetch all categories
    if ( !props.attributes.categories ) {
      wp.apiFetch( {
        url: '/wp-json/wp/v2/categories'
      }).then( categories => {
        props.setAttributes({
          categories: categories
        })
      })
    }

    if ( !props.attributes.categories ) {
      return 'Loading...';
    }

    if ( props.attributes.categories && props.attributes.categories.length === 0 ) {
      return 'No categories found. please add some';
    }

    function updateCategory(e) {
      props.setAttributes( {
        selectedCategory: e.target.value
      })
    }

    function updatePostsPerPage(e) {
      console.log('update posts per page');
      props.setAttributes( {
        postsPerPage: e.target.value
      });
      console.log(props.attributes);
    }


    console.log( props.attributes );

    return (
      <div>
        <label>Post Category</label>
        <select onChange={ updateCategory } value={ props.attributes.selectedCategory}>
          {
            props.attributes.categories.map( category => {
              return (
                <option value={ category.id }>
                  { category.name }
                </option>
              )
            })
          }
        </select>

        <label>Posts Per Page</label>
        <input placeholder="Posts per Page"
               type="text"
               onChange={ updatePostsPerPage }
               value={ props.attributes.postsPerPage }
        />
      </div>
    );
  },

  save: props => {
    return null;
  }

})
