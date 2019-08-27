// Import React Library
import React from 'react';

// Import our UserCreate component
import UserCreate from './UserCreate';

// Import our LanguageContext
import { LanguageStore } from '../contexts/LanguageContext';

// Import our ColorContext
import ColorContext from '../contexts/ColorContext';

// Import our LanguageSelector 
import LanguageSelector from './LanguageSelector';

class App extends React.Component {

  render(){
    return (
      <div className='ui container'>
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="yellow">
              <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    )
  }
}

export default App;