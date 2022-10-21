import React from "react";
import NavBar from "./NavBar";
import BikeList from "./BikeList";
import NewBikeForm from "./NewBikeForm";
import BikeDetail from "./BikeDetail";
import EditBikeForm from "./EditBikeForm";

class BikeControl extends React.Component {
  //constructor with state


  //functions for rendering

  //redering:

  render(){
    return (
      <React.Fragment>
        <NavBar />
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}
export default BikeControl;