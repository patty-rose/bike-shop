import React from "react";
import Bike from "./Bike";
import PropTypes from "prop-types";

function BikeList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.bikeList.map((bike) =>
        <Bike
          whenBikeClicked = { props.onBikeSelection }
          size={bike.size}
          type={bike.type}
          count={bike.count}
          id={bike.id}
          key={bike.id}/>
      )}
    </React.Fragment>
  );
}

BikeList.propTypes = {
  bikeList: PropTypes.array,
  onBikeSelection: PropTypes.func
};

export default BikeList;

