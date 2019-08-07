// Import our axios jsonPlaceHolder file to make API request
import jsonPlaceHolder from '../apis/jsonPlaceHolder'

/* Version 1
export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceHolder.get('/posts');
    
    dispatch({
      type: 'FETCH_POSTS',
      payload: response
    });
  }
};
*/

//Refactor Version 2
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response });
}