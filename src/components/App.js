// Import React Library
import React from 'react';

// Import our SongList component
import SongList from './SongList';

// Import our SongDetail component
import SongDetail from './SongDetail';

const App =  () => {
  return (
    <div className="ui container grid">
      <div className="row">
        <div className="column eight wider">
         <SongList />
        </div>
        <div className="column eight wider">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;