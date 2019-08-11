// Import React library
import React from 'react';

// Import the connect function from react-redux library
import { connect } from 'react-redux';

// Import our action creators
import { signIn, signOut } from '../actions';


class GoogleAuth extends React.Component {
  // Remove state initialization because we are using redux store now!
  // state = { isSignedIn: null, };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '686147297183-svin7ie4r4otgl8u2rrbnu3gb9u5b4mr.apps.googleusercontent.com',
        scope: 'email',
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();

        
        this.onAuthChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    });
  }

  onAuthChange = (isSignedIn) => {
    if(isSignedIn){
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if(this.props.isSignedIn ===  null){

      return null

    } else if (this.props.isSignedIn) {

      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon"/>
          Sign Out
        </button>
      ) 

    } else {

      return (
        <button onClick={this.onSignInClick} className="ui red google button">
        <i className="google icon"/>
          Sign In with Google
        </button>
      )
    }
  }

  render(){
    
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  }
}

export default connect(mapStateToProps, {
  signIn: signIn,
  signOut: signOut
})(GoogleAuth);