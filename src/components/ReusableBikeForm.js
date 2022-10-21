import React from "react";
import PropTypes from "prop-types";

function ReusableBikeForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='size'
          placeholder='Bike Size' />
        <input
          type='text'
          name='type'
          placeholder='Bike Type' />
        <input
          type='number'
          name='count'
          placeholder='Quantity of bikes being added' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableBikeForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableBikeForm;