// Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create react component (Function or Class)
const App = () => {
  return <div>Hello World!</div>;
}

// Take React Component and show it to the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
