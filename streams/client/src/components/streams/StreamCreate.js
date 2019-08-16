  /////////////////////////////////////////////////////
 //                  STREAM CREATE                  //
/////////////////////////////////////////////////////

//Import React Library
import React from 'react';

// Import the connect function from react-redux library
import { connect } from 'react-redux';

// Import our action creator
import { createStream } from '../../actions'

//  Import our new StreamForm
import StreamForm from './StreamForm';

// We change from function component to Class based component
class StreamCreate extends React.Component {

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);

/* wire up reduxForm and connect

  export default reduxForm({
    form: 'streamCreate',
    validate: validate,
  })(StreamCreate);


  const formWrapped = reduxForm({
    form: 'streamCreate',
    validate: validate,
  })(StreamCreate);

  export default connect(null, {
    createStream: createStream,
  })(formWrapped);

*/