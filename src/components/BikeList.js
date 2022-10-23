import React from "react";
import Bike from "./Bike";
import PropTypes from "prop-types";

function BikeList(props){
  return (
    <React.Fragment>
      
      {props.bikeList.map((bike) =>
        <Bike
          whenIncrementBikeCountClicked = { props.onIncrementBikeCountClicked }
          whenSellBikeClicked = { props.onSellBikeClicked }
          whenScrapBikeClicked = { props.onScrapBikeClicked }
          whenGrantBikeClicked = { props.onGrantBikeClicked }
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
  onBikeSelection: PropTypes.func,
  onIncrementBikeCountClicked: PropTypes.func,
  onSellBikeClicked: PropTypes.func,
  onScrapBikeClicked: PropTypes.func,
  onGrantBikeClicked: PropTypes.func
};

export default BikeList;

