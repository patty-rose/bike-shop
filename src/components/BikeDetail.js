import React from "react";
import PropTypes from "prop-types";

function BikeDetail(props){
  const { bike, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Bike Detail</h1>
      <h3>{bike.size} - {bike.type}</h3>
      <p><em>{bike.count}</em></p>
      <button onClick={ props.onClickingEdit }>Update Bike</button>
      <button onClick={()=> onClickingDelete(bike.id) }>Delete this size/type of bike</button>
      <hr/>
    </React.Fragment>
  );
}

BikeDetail.propTypes = {
  bike: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default BikeDetail;