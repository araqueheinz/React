// Action Creator

// Name export
export const selectSong = (song) => {
  // Return an Action / Object
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
