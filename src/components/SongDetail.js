// Import React library
import React from 'react';

// Import the connect function from react-redux library
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if(!song){
    return <div>Select A Song</div>
  }

  return(
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title} 
        <br/>
        Author: {song.author}
        <br/>
        Duration: {song.duration} 
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);