// Import CSS file
import './VideoItem.css';

// Import React library
import React from 'react';

// Destructuring video & onVideoSelect from props
const VideoItem = ({ video, onVideoSelect }) => {
  return(
    // onClick is the name of the eventHandler
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img 
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">
          {video.snippet.title}
        </div>
      </div>
    </div>
  );
;}

export default VideoItem;