import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Search from "./Search";
import HogContainer from "./HogContainer";

class App extends Component {
  state = {
    piggies: hogs,
    selectedCategory: "",
  };

  changeSelectedCategory = (pickedCat) => {
    this.setState({
      selectedCategory: pickedCat
    });
  };


  helperFunctionThatReturnsAnArray = () => {
    if(this.state.selectedCategory === "All"){
      return this.state.piggies

    } else if(this.state.selectedCategory === "Greasy"){
      return this.state.piggies.filter(pig => pig.greased)

    } else if(this.state.selectedCategory === "Clean"){
      return this.state.piggies.filter(pig => !pig.greased)

    } else if(this.state.selectedCategory === "Name"){
      let copyOfArray = [...this.state.piggies]
      copyOfArray.sort((pigA, pigB) => {
        return pigA.name.localeCompare(pigB.name)
      })
      return copyOfArray
      
    } else if(this.state.selectedCategory === "Weight"){
      let copyOfArray = [...this.state.piggies]
      copyOfArray.sort((pigA, pigB) => {
        return pigA.weight - pigB.weight
      })
      return copyOfArray
    }else{
      return (this.state.piggies)
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Search
          selectedCategory={this.state.selectedCategory}
          changeSelectedCategory={this.changeSelectedCategory}
        />
        <HogContainer piggies={this.helperFunctionThatReturnsAnArray()} />
      </div>
    );
  }
}

export default App;
