// Import Lodash library to handle Create streams and delete stream
import _ from 'lodash';

// Import our action types!
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {

    // CREATE STREAM
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    // READ ALL STREAMS  
    case FETCH_STREAMS:
        return { ...state, ..._.mapKeys(action.payload, 'id') };

    // READ ONE STREAM
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    
    // UPDATE STEAM
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    // DELETE STREAM
    case DELETE_STREAM:
        return _.omit(state, action.payload);

    default:
      return state;
  }
}