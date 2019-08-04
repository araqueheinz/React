// Import React
import React from 'react';

// Import the pre customized version of Axios that we created
import unsplash from '../api/unsplash';

// Import SearchBar Component
import SearchBar from './SearchBar'


class App extends React.Component {
  // Initialize State
  state = { images: [],};

  // async wait syntax
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

  // .then statement
    /*
      onSearchSubmit(term) {
        // Axios
        axios.get('https://api.unsplash.com/search/photos', {
          params: { 
            query: term,
            per_page: 16, 
          },
          headers: {
            Authorization: 'Client-ID e1173c2e2609b2c76285fa636d353a6ac743954c592e008c6372cbb1952eb898',
          },
        }).then((response)=> {
          console.log(response.data.results);
        });
      }
    */

  render(){
    return(
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar
          runWhenUserSubmits={this.onSearchSubmit}
        />
        Found: {this.state.images.length} images.
      </div>
    )
  }
}

export default App