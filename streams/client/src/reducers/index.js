// Import combineReducers function from redux library
import { combineReducers } from 'redux';
// Import our reducer
import authReducer from './authReducer'

export default combineReducers({
  auth: authReducer,
});

