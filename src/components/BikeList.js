import React from "react";
import Bike from "./Bike";
import PropTypes from "prop-types";

function BikeList(props){
const list = props.bikeList;
let noBikes = null;
if (list.length === 0){
  noBikes = <div class="bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3 text-center" role="alert">
  <p class="font-bold">No Bikes In Stock!!! </p>
  <p class="text-sm">Click Add Bikes in the navigation bar above to get started!</p>
</div>
}

  return (
    <React.Fragment>
      <h1 className="font-bold leading-relaxed uppercase text-center">Inventory</h1>
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
      {noBikes}
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

