// Import React Library
import React, { Component } from 'react';

// Import connect function from react-redux library
import { connect } from 'react-redux';

// Import our selectSong action
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => this.props.selectSong(song)}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render(){
    return(
      <div className="ui divided list">{this.renderList()}</div>
    );
  };
};

const mapSateToProps = (state) => {
  return { songs: state.songs };
}

export default connect(mapSateToProps, {
  selectSong: selectSong,
})(SongList);