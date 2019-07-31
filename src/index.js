// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom'

// Create a react component (Class Based)
class App extends React.Component {
  // Old Way
  constructor(props) {
    super(props)

    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // To update the state object we called setSate
        this.setState({ lat: position.coords.latitude });

        // !! We never want to do a direct assignment to our state object, Example:
        // this.state.lat = position.coords.latitude
      },
      (err) => {
        this.setState({ errorMessage: err.message })
      } 
    );
  };

  // Render is a requirement of REACT
  render() {
    
    // This right here is refer as Conditional rendering
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;
  }
}

// Take the react component then show it on the screen
ReactDOM.render(<App/>, document.querySelector('#root'));