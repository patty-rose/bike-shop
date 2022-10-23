import React from "react";
import PropTypes from "prop-types";

function ReusableBikeForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <div className="mb-3 pt-0">
          <input
            type='text'
            name='size'
            placeholder='Bike Size'
            className="px-3 py-4 placeholder-slate-500 text-slate-900 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full" />
        </div>
        <div className="mb-3 pt-0">
          <input
            type='text'
            name='type'
            placeholder='Bike Type'
            className="px-3 py-4 placeholder-slate-500 text-slate-900 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"  />
        </div>
        <div className="mb-3 pt-0">
          <input
            type='number'
            name='count'
            placeholder='Quantity of bikes being added'
            className="px-3 py-4 placeholder-slate-500 text-slate-900 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full" />
        </div>
        <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableBikeForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableBikeForm;