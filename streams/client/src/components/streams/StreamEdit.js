  /////////////////////////////////////////////////////
 //                   STREAM EDIT                   //
/////////////////////////////////////////////////////

// Import lodash library
import _ from 'lodash';

//Import React Library
import React from 'react';

// Import the connect function from react-redux library
import { connect } from 'react-redux';

// Import our action creator 
import { fetchStream, editStream } from '../../actions';


// Import our StreamForm
import StreamForm from './StreamForm'

class StreamEdit extends React.Component {
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps)
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect( mapStateToProps,
  { 
    fetchStream,
    editStream, 
  }
)(StreamEdit);
