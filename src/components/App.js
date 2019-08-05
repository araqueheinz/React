// Import React library
import React from 'react';

// Import SearchBar Component
import SearchBar from './SearchBar'

// Import youtube customized axios file
import youtube from '../apis/youtube';

// Import VideoList Component
import VideoList from './VideoList';

// Import VideoDetail Component
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount() {
    this.onTermSubmit('upcoming ps4 games');
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', { 
      params: {
        q: term,
      }
    });
    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  }

  onVideoSelect = async (video) => {
    this.setState({ selectedVideo: video });
  }

  render(){
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
            <VideoList 
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default App;