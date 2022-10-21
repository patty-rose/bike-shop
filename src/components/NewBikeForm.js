import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableBikeForm from "./ReusableBikeForm";

function NewBikeForm(props){

  function handleNewBikeFormSubmission(event) {
    event.preventDefault();
    props.onNewBikeCreation({ 
      size: event.target.size.value, 
      type: event.target.type.value, 
      count: parseInt(event.target.count.value), 
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableBikeForm 
        formSubmissionHandler={handleNewBikeFormSubmission}
        buttonText="Add Bikes!" />
    </React.Fragment>
  );
}

NewBikeForm.propTypes = {
  onNewBikeCreation: PropTypes.func
};

export default NewBikeForm;