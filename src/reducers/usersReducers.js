export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return [...state, action.payload];
    default:
      return state;
  }
};

// DON'T FORGET TO IMPORT AND COMBINE NEW REDUCERS AT reducers/index.js