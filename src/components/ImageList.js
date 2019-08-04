// Import React Library
import React from 'react';

const ImageList = props => {
  // Destructuring images.description, image.id, image.urls
  const images = props.images.map(({ description, id, urls }) => {
    return <img alt={ description } key={ id } src={ urls.regular }/>
  });
  return(
    <div>{images}</div>
  )
}

export default ImageList;