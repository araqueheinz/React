// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Import the Provider component from react-redux library
import { Provider } from 'react-redux';

// Import the createStore function from react library
import { createStore } from 'redux';

// Import our App component
import App from './components/App';

// Import all of our reducers
import reducers from './reducers';

// Create store
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#root')
);