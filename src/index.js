// Import React & ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Import provider component from react-redux library
import { Provider } from 'react-redux';

// Import createStore & applyMiddleware functions from redux library
import { createStore, applyMiddleware } from 'redux';

// Import redux-thunk middleware
import thunk from 'redux-thunk';

// Import our App component
import App from './components/App';

// Import our reducers
import reducers from './reducers';

// Declare the createStore as a variable with reducers and applyMiddleware function with thunk
const store = createStore(reducers, applyMiddleware(thunk));

// Take the App Component and show it on the screen
// Create an Instance of the Provider and wrap our App Component with it
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#root')
);
