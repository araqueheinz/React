// Import combineReducers function from redux library
import { combineReducers } from 'redux';

// Import our reducer
import authReducer from './authReducer';

// Import our new CRUD streams reducer
import streamReducer from './streamReducer';

// Import reducer from the redux-form library and rename it
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer,
});

