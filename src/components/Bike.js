import React from "react";
import PropTypes from"prop-types";
import bikeImg from "./../img/bike.png";

function Bike(props){ 
  let bikeCountWarning = null;
  let buttonsOrWarning = <div id="buttonsOrWarningDiv"> <p className="mt-2">
  <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type='button'onClick = {() => props.whenSellBikeClicked(props.id)}>Sell one!</button>
  <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type='button'onClick = {() => props.whenScrapBikeClicked(props.id)}>Scrap One</button>
  <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type='button'onClick = {() => props.whenGrantBikeClicked(props.id)}>Grant one!</button>
  <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type='button'onClick = {() => props.whenIncrementBikeCountClicked(props.id)}>Add one!</button>
</p></div>;

  if(props.count < 1){
    bikeCountWarning = <div class="bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3" role="alert">
    <p class="font-bold">Out of Stock! </p></div>
    buttonsOrWarning = <div id="buttonsOrWarningDiv"> <p className="mt-2">
    <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type='button'onClick = {() => props.whenIncrementBikeCountClicked(props.id)}>Add one!</button>
  </p><div class="bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3" role="alert"><p class="font-bold">There are no bikes to process. Please add more before trying scrap, sell, or grant. </p></div></div>

  } else if (props.count < 5){
    bikeCountWarning = <div class="bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3" role="alert">
    <p class="font-bold">Low Stock! </p></div>
  }
  return(
    <React.Fragment>
      <div className="pt-6 pb-12">  
        <div id="card" className="">
          <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">

            <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">

              <div className="h-64 w-auto md:w-1/2" style={{cursor:'pointer'}} onClick = {() => props.whenBikeClicked(props.id)}>
                <img className="inset-0 h-full w-full object-cover object-center" src={bikeImg} alt="black bike on a wooden floor against a white wall" />
              </div>

              <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                {bikeCountWarning}
                <h3 className="font-semibold text-lg leading-tight truncate">Size: { props.size }</h3>
                <h3 className="font-semibold text-lg leading-tight truncate">Type: { props.type }</h3>
                <h2 className="font-semibold text-lg leading-tight truncate">In stock: { props.count }</h2>
                {buttonsOrWarning}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

Bike.propTypes = {
  size : PropTypes.string,
  type : PropTypes.string,
  count : PropTypes.number,
  outOfStock : PropTypes.bool,
  lowStock : PropTypes.bool,
  id : PropTypes.string,
  whenBikeClicked: PropTypes.func,
  whenSellBikeClicked: PropTypes.func,
  whenIncrementBikeCountClicked: PropTypes.func,
  whenScrapBikeClicked: PropTypes.func,
  whenGrantBikeClicked: PropTypes.func
};

export default Bike;