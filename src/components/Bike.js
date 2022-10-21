import React from "react";
import PropTypes from"prop-types";

function Bike(props){ 
  return(
    <React.Fragment>
      <div onClick = {() => props.whenBikeClicked(props.id)}>
        <h3>{ props.size } -{ props.type } </h3>
        <p>{ props.count}</p>
      </div>
    </React.Fragment>
  )
}

Bike.propTypes = {
  size : PropTypes.string,
  type : PropTypes.string,
  count : PropTypes.number,
  id : PropTypes.string,
  whenBikeClicked: PropTypes.func
};

export default Bike;