import React from "react";
import PropTypes from "prop-types";

function NavBar(props){
  return (
    <React.Fragment>
      <div className="flex flex-wrap py-2">
        <div className="w-full px-4">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-emerald-500 rounded">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <button className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" onClick = {props.onBikeListClick}>
                  Bikes For Humanity - Inventory
                </button>
                <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                  <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                  <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                  <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                </button>
              </div>
              <div className="flex lg:flex-grow items-center" id="example-navbar-info">
                <ul className="flex flex-col lg:flex-row list-none ml-auto">
                  <li className="nav-item">
                    <button className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" onClick = {props.onBikeListClick}>
                      Bike Inventory
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" onClick = {props.onAddBikeClick}>
                      Add Bikes
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                      Processed Bikes Stats
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
}

NavBar.propTypes = {
  onBikeListClick: PropTypes.func,
  onAddBikeClick: PropTypes.func
};

export default NavBar;