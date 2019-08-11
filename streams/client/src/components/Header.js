// Import React library
import React from 'react';

// Import the link component from react-router-dom library
import { Link } from 'react-router-dom';

// Import our GoogleAuth component
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamer's Name
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        < GoogleAuth />
      </div>
    </div>
  )
}

export default Header;