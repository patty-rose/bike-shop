import React from "react";
import PropTypes from "prop-types";
import bikeImg from "./../img/bike.png";

function BikeDetail(props){
  const { bike, onClickingDelete } = props;

  return (
    <React.Fragment>
      <div className="pt-6 pb-12">  
        <div id="card" className="">
          <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
            <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
              <div className="h-64 w-auto md:w-1/2">
                <img className="inset-0 h-full w-full object-cover object-center" src={ bikeImg } alt="black bike on a wooden floor against a white wall" />
              </div>
              <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                <h3 className="font-semibold text-lg leading-tight truncate">Size: { props.bike.size }</h3>
                <h3 className="font-semibold text-lg leading-tight truncate">Type: { props.bike.type }</h3>
                <h2 className="font-semibold text-lg leading-tight truncate">In stock: { props.bike.count }</h2>
                <p className="mt-2">
                  <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type='button'onClick={ props.onClickingEdit }>Edit Bike Details</button>
                  <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type='button'onClick={()=> onClickingDelete(bike.id) }>Delete</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

BikeDetail.propTypes = {
  bike: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default BikeDetail;