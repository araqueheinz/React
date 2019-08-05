// Import React Library
import React from 'react';

// Import the VideoItem component
import VideoItem from './VideoItem'
// Destructuring videos & onVideoSelect from props
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem 
      key={video.id.videoId}
      onVideoSelect={onVideoSelect} 
      video={video} 
    />
  });

  return (
    <div className="ui relaxed divided list">{renderedList}</div>
  )
}

export default VideoList;