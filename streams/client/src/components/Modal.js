// Import React library
import React from 'react';

// Import ReactDOM library
import ReactDOM from 'react-dom';

// Refactoring to the modal to make it more modular
const Modal = props => {
  // Create a Portal two arguments JSX and the query selector
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
      // stopPropagation() is going to make sure that the event does not continue to bubble up
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    // This is in the public/index.html
    document.querySelector('#modal')
  );
};

export default Modal;