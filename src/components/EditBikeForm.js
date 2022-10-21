import React from "react";
import ReusableBikeForm from "./ReusableBikeForm";
import PropTypes from "prop-types";

function EditBikeForm (props) {
  const { bike } = props;

  function handleEditBikeFormSubmission(event) {
    event.preventDefault();
    props.onEditBike({
      size: event.target.size.value, 
      type: event.target.type.value,
      count: event.target.count.value, 
      id: bike.id});
  }

  return (
    <React.Fragment>
      <ReusableBikeForm 
        formSubmissionHandler={handleEditBikeFormSubmission}
        buttonText="Update" />
    </React.Fragment> //
  );
}

EditBikeForm.propTypes = {
  bike: PropTypes.object,
  onEditBike: PropTypes.func
};

export default EditBikeForm;