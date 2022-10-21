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
          names={bike.names}
          location={bike.location}
          issue={bike.issue}
          id={bike.id}
          key={bike.id}/>
      )}
    </React.Fragment>
  );
}

// Add propTypes for bikeList.
BikeList.propTypes = {
  bikeList: PropTypes.array,
  onBikeSelection: PropTypes.func
};

export default BikeList;

