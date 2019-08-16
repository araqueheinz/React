// Action Creators

// Import our axios api
import streams from '../apis/streams'

// Import our own history browser object to make programmatic navigation
import history from '../history';

// To avoid mistakes in the action types
// Import all the types that we will be using
import { 
  SIGN_IN, SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM,
} from './types'

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
}

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
}

  /////////////////////////////////////////////////////
 //                C.R.U.D STREAMS                  //
/////////////////////////////////////////////////////


//////////////////////  CREATE A STREAM ////////////////////// 
export const createStream = formValues => async (dispatch, getState)=> {
  const { userId } = getState().auth;
  const response = await streams.post('/streams', { ...formValues, userId });

  dispatch({
    type: CREATE_STREAM,
    payload: response.data,
  });

  // Programmatic navigation to get the user back to the root route
  history.push('/');
}

////////////////////// READ ALL STREAMS ////////////////////// 
export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');

  dispatch({ 
    type: FETCH_STREAMS,
    payload: response.data,
  });
};

//////////////////////  READ ONE STREAM ////////////////////// 
export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ 
    type: FETCH_STREAM,
    payload: response.data,
  });
};

//////////////////////  UPDATE STREAM ////////////////////// 
export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);

  dispatch({ 
    type: EDIT_STREAM, 
    payload: response.data,
  });

  history.push('/');
};

//////////////////////  DELETE STREAM ////////////////////// 
export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);

  dispatch({ 
    type: DELETE_STREAM, 
    payload: id,
  });
};