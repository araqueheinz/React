  /////////////////////////////////////////////////////
 //                  STREAM DELETE                  //
/////////////////////////////////////////////////////

//Import React Library
import React from 'react';

// Import the connect function from the react-redux library
import { connect } from 'react-redux';

// Import the Link component from react-router-dom
import { Link } from 'react-router-dom';

// Import our modal component
import Modal from '../Modal';

// Import our history object
import history from '../../history';

// Import our actions 
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component{

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions(){
    // Stream Id
    const { id } = this.props.match.params;

    return (
      // <React.Fragment> to avoid using <div> that messes with the css style
      <React.Fragment>
        <button onClick={() => this.props.deleteStream(id)} className="ui button negative">
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    }

    return `Are you sure you want to delete the stream with title: ${
      this.props.stream.title
    }`;
  }
  
  render(){
    return (
      <Modal 
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps,
  { 
    fetchStream,
    deleteStream,
  })(StreamDelete);