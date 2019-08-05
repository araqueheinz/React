// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Import provider component from react-redux library
import { Provider } from 'react-redux';

// Import createStore function from redux library
import { createStore } from 'redux';

// Import the App Component
import App from './components/App'

// Import our Reducers
import reducers from './reducers';

// Take the App Component and show it on the screen
// Create an Instance of the Provider and wrap our App Component with it
ReactDOM.render(
  <Provider store={createStore(reducers)} >
    <App/>
  </Provider>,
  document.querySelector('#root')
);