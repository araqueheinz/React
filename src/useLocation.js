// Import useState and useEffect from React library
import { useState, useEffect } from 'react';

export default () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(()=>{
    console.log('Component is up and running!');
    window.navigator.geolocation.getCurrentPosition(
      (position) =>  setLat(position.coords.latitude),
      (err) => setErrorMessage(err.message)
    );
  },[]);

  return [lat, errorMessage]
}