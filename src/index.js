// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom'

// Import SeasonDisplay component
import SeasonDisplay from './SeasonDisplay';

// Import Spinner component
import Spinner from './Spinner';

//Import our useLocation function
import useLocation from './useLocation';

// Create a new App functional component 
// Check git branch 5 Intro to Lifecycle Methods for class based components
const App = () => {
  const [lat, errorMessage] = useLocation();

  let content;
  if(errorMessage){
    content = <div>Error: {errorMessage}</div>
  } else if(lat) {
     content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner message = "Please accept location request" />;
  }
   return <div className="border green">{content}</div>
}

// Take the react component then show it on the screen
ReactDOM.render(<App/>, document.querySelector('#root'));