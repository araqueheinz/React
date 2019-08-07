// Using a Switch Statement Most common practice
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
      
    default:
      return state;
  }
};

/* Using Conditionals
  export default (state = [], action) => {

    if (action.type === 'FETCH_POSTS'){
      return action.payload;
    }

    return state;
*/



// DON'T FORGET TO IMPORT AND COMBINE NEW REDUCERS AT reducers/index.js