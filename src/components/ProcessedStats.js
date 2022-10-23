import React from "react";
import PropTypes from "prop-types";
import rowOfBikes from "./../img/rowOfBikes.png";
import grantedImg from "./../img/grantedImg.png";
import scrappedImg from "./../img/scrappedImg.png";

function ProcessedStats(props){
  return (
    <React.Fragment>
        <h1 className="font-bold leading-relaxed uppercase text-center">Where have all our bikes gone?</h1>
        <div className="pt-6 pb-12">  
          <div id="card" className="">
            <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
              <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
                <div className="h-64 w-auto md:w-1/2">
                  <img className="inset-0 h-full w-full object-cover object-center" src={ grantedImg } alt="child riding a bike, view from behind, with a backpack and training wheels" />
                </div>
                <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                  <h3 className="font-semibold text-lg leading-tight truncate">Bikes Granted</h3>
                  <p className="text-lg leading-tight">When we grant bikes it is at no cost to the grantee and we package it with a helmet, fenders, and a lock to ensure the rider will be able to access the on-going benefits of the bike with safety, comfort, and security. Granting bikes to marginalized community members in need is central to our mission.</p>
                  <h2 className="font-semibold leading-tight truncate bg-emerald-500 text-white  uppercase text-xs px-4 py-2 rounded shadow mr-1 mb-1 ease-linear transition-all duration-150">Bikes that we have granted to community members in need: { props.grantedBikesCount }
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* sold bikes stats */}
          <div className="pt-6 pb-12">  
            <div id="card" className="">
              <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
                <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
                  <div className="h-64 w-auto md:w-1/2">
                    <img className="inset-0 h-full w-full object-cover object-center" src={ rowOfBikes } alt="black bike on a wooden floor against a white wall" />
                  </div>
                  <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                    <h3 className="font-semibold text-lg leading-tight truncate">Bikes Sold</h3>
                    <p className="text-lg leading-tight">We fund our non-profit through grants, donations, and our bike shop sales. We sell bikes to fund all of our programs, especially our bike granting program.</p>
                    <h2 className="font-semibold leading-tight truncate bg-emerald-500 text-white  uppercase text-xs px-4 py-2 rounded shadow mr-1 mb-1 ease-linear transition-all duration-150">Bikes that we have sold to fund our programs: { props.soldBikesCount }
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* scrapped bikes stats */}
          <div className="pt-6 pb-12">  
            <div id="card" className="">
              <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
                <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
                  <div className="h-64 w-auto md:w-1/2">
                    <img className="inset-0 h-full w-full object-cover object-center" src={ scrappedImg } alt="black bike on a wooden floor against a white wall" />
                  </div>
                  <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                    <h3 className="font-semibold text-lg leading-tight truncate">Scrapped Bikes</h3>
                    <p className="text-lg leading-tight">Not all bike donations we recieve will become bikes to be granted or even sold. Many will be scrapped. When we scrap bikes we remove any re-usable parts to help us build up safe, functioning bikes. And we responsibly recycle as much of the remaining parts as we can. Removing bikes from the waste-stream is part of our mission.</p>
                    <h2 className="font-semibold leading-tight truncate bg-emerald-500 text-white  uppercase text-xs px-4 py-2 rounded shadow mr-1 mb-1 ease-linear transition-all duration-150">Responsibly scrapped bikes: { props.scrappedBikesCount }</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
}

ProcessedStats.propTypes = {
  grantedBikesCount: PropTypes.number,
  scrappedBikesCount: PropTypes.number,
  soldBikesCount: PropTypes.number
};

export default ProcessedStats;

