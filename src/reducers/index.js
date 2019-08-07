// Import combineReducers function from redux library
import { combineReducers } from 'redux';
// Import our postsReducer
import postsReducer from './postsReducers';
// Import our usersReducer 
import usersReducer from './usersReducers'

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
});