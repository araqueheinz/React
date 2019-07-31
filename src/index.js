// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom'

// Import SeasonDisplay component
import SeasonDisplay from './SeasonDisplay';
// Import Spinner component
import Spinner from './Spinner';

// Create a react component (Class Based)
class App extends React.Component {
  // Refactoring state, New way! (Thanks to Babel)
  state = { lat: null, errorMessage: '' };

  // Lifecycles
  componentDidMount() {
    console.log('Component is up and running!');
    window.navigator.geolocation.getCurrentPosition(
      (position) =>  this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log('Did you just made an update?.... Yes you did :D')
  }

  // Function
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay
        lat = { this.state.lat }
      />;
    }

    return <Spinner message = "Please accept location request" />;
  }

  // Render is a requirement of REACT
  render() {
    return (
      <div className="border green">
        {this.renderContent()}
      </div>
    )
  }
}

// Take the react component then show it on the screen
ReactDOM.render(<App/>, document.querySelector('#root'));