// Import our axios jsonPlaceHolder file to make API request
import jsonPlaceHolder from '../apis/jsonPlaceHolder'
// Import lodash library
import _ from 'lodash';

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

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};


// Solution 2: make one action
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach(id => dispatch(fetchUser(id)));

  /* Same as previous, but using _.chain() 
    _.chain(getState().posts)
      .map('userId')
        .uniq()
          .forEach(id => dispatch(fetchUser(id)))
            .value() ----> this executes all the previous
  */

};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
}


/* Solution 1: Memoize lodash version Solution to make a fetch one time per each unique id
  export const fetchUser = id => dispatch => {
    _fetchUser(id, dispatch);
  };


  const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
  });
*/