// Import React library
import React from 'react';

// Import the { connect } function from react-redux library
import { connect } from 'react-redux';

// Import our actions
import { fetchPosts } from '../actions';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render(){
    return(
      <div>Post List</div>
    )
  }
}



export default connect(null, { fetchPosts: fetchPosts })(PostList);