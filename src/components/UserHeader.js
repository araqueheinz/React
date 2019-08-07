// Import React library
import React from 'react';

// Import the connect function from react-redux library
import { connect } from 'react-redux';

class UserHeader extends React.Component {
 

  render() {
    const { user } = this.props;
    
    if (!user) {
      return null;
    }

    return(
      <div className="header" >{user.name}</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);