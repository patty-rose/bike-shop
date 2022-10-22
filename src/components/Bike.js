import React from "react";
import PropTypes from"prop-types";

function Bike(props){ 
  return(
    <React.Fragment>
      <div onClick = {() => props.whenBikeClicked(props.id)}>
        <h3>{ props.size } -{ props.type } </h3>
        <p>{ props.count}</p>
      </div>
      <button onClick = {() => props.whenSellBikeClicked(props.id)}>Sell one!</button>
      <button onClick = {() => props.whenScrapBikeClicked(props.id)}>Scrap One!</button>
      <button onClick = {() => props.whenGrantBikeClicked(props.id)}>Grant one!</button>
      <button onClick = {() => props.whenIncrementBikeCountClicked(props.id)}>+1</button>
    </React.Fragment>
  )
}

Bike.propTypes = {
  size : PropTypes.string,
  type : PropTypes.string,
  count : PropTypes.number,
  id : PropTypes.string,
  whenBikeClicked: PropTypes.func,
  whenSellBikeClicked: PropTypes.func,
  whenIncrementBikeCountClicked: PropTypes.func,
  whenScrapBikeClicked: PropTypes.func,
  whenGrantBikeClicked: PropTypes.func
};

export default Bike;