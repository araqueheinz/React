// Import React Library
import React from 'react';

// Import our UserCreate component
import UserCreate from './UserCreate';

// Import our LanguageContext
import LanguageContext from '../contexts/LanguageContext';

// Import our ColorContext
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
  state = { language: 'english' }

  onLanguageChange = (language) => {
    this.setState({ language: language });
  }


  render(){
    return (
      <div className='ui container'>
        <div>
          Select Language: 
          <i className="flag us" onClick={() => this.onLanguageChange('english')} />
          <i className="flag spain" onClick={() => this.onLanguageChange('spanish')} />
        </div>
        <ColorContext.Provider value="yellow">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    )
  }
}

export default App;