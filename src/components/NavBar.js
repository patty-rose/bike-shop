import React from "react";
import PropTypes from "prop-types";

function NavBar(props){
  return (
    <React.Fragment>
      <button onClick = {props.onBikeListClick}>Bike List</button>
      <button onClick = {props.onAddBikeClick}>Add Bikes</button>
      {/* <button onClick = {this.FUNC}>What happened to our bikes?</button> */}
      <a>Bikes: NUM</a>
    </React.Fragment>
  );
}

NavBar.propTypes = {
  onBikeListClick: PropTypes.func,
  onAddBikeClick: PropTypes.func
};

export default NavBar;