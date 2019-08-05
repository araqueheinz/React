// Reducers

// Import combineReducers functions from the redux library
import { combineReducers } from 'redux';

const songReducer = () => {
  return [
    { title: 'Spanglish', author: 'Reik', duration: '3:24' },
    { title: 'Monster', author: 'Dead Eyes', duration: '4:00' },
    { title: 'Believe', author: 'Ken Loi, Elle Vee', duration: '5:00' },
    { title: '911', author: 'Feid, Nacho', duration: '3:38' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

// Combine all Reducers
export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
