// Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create react component (Function or Class)
const App = () => {
  const buttonText = { text: 'Click Me!' };
  const style = { backgroundColor: 'blue', color: 'white' }
  const labelText = 'Enter Your Name:'

  return (
    <div>
      <label className="label" htmlFor="name">  { labelText } </label>
      <input id="name" type="text" />
      <button style={ style }>
         { buttonText.text } 
      </button>
    </div>
  );
};

// Take React Component and show it to the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
