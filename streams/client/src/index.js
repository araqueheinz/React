// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Import the Provider component from react-redux library
import { Provider } from 'react-redux';

// Import the createStore function from react library
// For redux-devtools-extension we need the 
import { createStore, applyMiddleware, compose } from 'redux';

// Import our App component
import App from './components/App';

// Import all of our reducers
import reducers from './reducers';

// For redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Create store
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware()),
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#root')
);