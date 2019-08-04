// Import React
import React from 'react';

// Import the pre customized version of Axios that we created
import unsplash from '../api/unsplash';

// Import SearchBar Component
import SearchBar from './SearchBar'

// Import Image List Component
import ImageList from './ImageList';


class App extends React.Component {
  // Initialize State
  state = { images: [],};

  // async await syntax
  onSearchSubmit =  async (term) => {
    // Axios await
    const response = await unsplash.get('/search/photos', {
      params: { 
        query: term,
        per_page: 16, 
      },
    });
    // Update State
    this.setState({ images: response.data.results });
  }

  render(){
    return(
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar
          runWhenUserSubmits={this.onSearchSubmit}
        />
        <ImageList
          images={this.state.images}
        />
      </div>
    )
  }
}

export default App