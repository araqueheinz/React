  /////////////////////////////////////////////////////
 //                  STREAM CREATE                  //
/////////////////////////////////////////////////////

//Import React Library
import React from 'react';

// Import Field component and reduxForm function from redux library
import { Field, reduxForm } from 'redux-form';

// We change from function component to Class based component
class StreamCreate extends React.Component {

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    //console.log(input.name,' was touched? ',meta.touched)
    // Change css on the input as well
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    // console.log(formProps) 
    // input and label are destructed from formProps which is passed down as an argument automatically
    return (
      <div className={className}>
        <label>{ label }</label>
        <input { ...input } autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

// Functionality from redux-form
const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({
  form: 'streamCreate',
  validate: validate,
})(StreamCreate);