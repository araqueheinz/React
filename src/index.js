// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom'

//Import Libraries

// Create a react component (Functional)

/*
  const App = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position), 
      (err) => console.log(err) 
    );
    return <div>Latitude: </div>
  }
*/

// Create a react component (Class Based)
class App extends React.Component {
  
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position), 
      (err) => console.log(err) 
    );
    return <div>Latitude: </div>
  }
}

// Take the react component then show it on the screen
ReactDOM.render(<App/>, document.querySelector('#root'));