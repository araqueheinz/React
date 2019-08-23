// Import React library
import React from 'react';

// Import our LanguageContext
import LanguageContext from '../contexts/LanguageContext';

// Import our ColorContext
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  // When we are using a Consumer we do not have to specify the context type
  //static contextType = LanguageContext;

    
  render(){
    // When we are using a Consumer we do not have to specify the context type
    // Get data inside the context
    // console.log(this.context)
    // const text = this.context === 'english' ? 'Submit' : 'Enviar';

    return(
      <ColorContext.Consumer>
        {(color) => 
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer> 
              {(value) => value === 'english' ? 'Submit' : 'Enviar' }
            </LanguageContext.Consumer> 
          </button>
        }
      </ColorContext.Consumer>
    )
  }
}

export default Button; 