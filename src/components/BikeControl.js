import React from "react";
import NavBar from "./NavBar";
import BikeList from "./BikeList";
import NewBikeForm from "./NewBikeForm";
import BikeDetail from "./BikeDetail";
import EditBikeForm from "./EditBikeForm";

class BikeControl extends React.Component {
  //constructor with state
  constructor(props){
    super(props);
    this.state = {
      mainBikeList: [],
      selectedBike: null,
      editing: false,
      visibleComponent: null
    }
  }

  //NavBar buttons handlers:
  handleAddBikeClick = () => {
    this.setState({
      visibleComponent: "NewBikeForm"
    });
  }

  handleBikeListClick = () => {
    this.setState({
      visibleComponent: "BikeList"
    });
  }

  //functions to pass as props:
    //pass to NewBikeForm:
  handleAddingNewBikeToList = (newBike) => {
    const newMainBikeList = this.state.mainBikeList.concat(newBike);
    this.setState({
      mainBikeList: newMainBikeList,
      visibleComponent: "BikeList"
    });
  }

    //pass to BikeList:
  handleChangingSelectedBike = (id) => {
    const newSelectedBike = this.state.mainBikeList.filter(bike => bike.id === id)[0];
    this.setState({
      selectedBike: newSelectedBike
    });
  }

    //pass to Bike Detail
  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleDeletingBike = (id) => {
    const newMainBikeList = this.state.mainBikeList.filter(bike => bike.id !== id);
    this.setState({
      mainBikeList: newMainBikeList,
      selectedBike: null
    });
  }

    //pass to EditBikeForm
  handleEditingBikeInList = (bikeToEdit) => {
    const editedMainBikeList = this.state.mainBikeList
      .filter(bike => bike.id !== this.state.selectedBike.id)
      .concat(bikeToEdit);
    this.setState({
        mainBikeList: editedMainBikeList,
        editing: false,
        selectedBike: null
      });
  }

  //redering:

  render(){
    let currentlyVisibleState = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditBikeForm bike = {this.state.selectedBike} onEditBike = {this.handleEditingBikeInList} />
    } else if (this.state.selectedBike != null) {
      currentlyVisibleState = <BikeDetail bike = {this.state.selectedBike} onClickingDelete = {this.handleDeletingBike} onClickingEdit = {this.handleEditClick} />
    } else if (this.state.visibleComponent === "NewBikeForm"){
      currentlyVisibleState = <NewBikeForm onNewBikeCreation = {this.handleAddingNewBikeToList} />
    } else {
      currentlyVisibleState = <BikeList bikeList = {this.state.mainBikeList} onBikeSelection = {this.handleChangingSelectedBike} />
    }

    return (
      <React.Fragment>
        <NavBar onAddBikeClick={this.handleAddBikeClick} onBikeListClick={this.handleBikeListClick} />
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}
export default BikeControl;