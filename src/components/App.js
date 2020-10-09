import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Search from "./Search";
import HogContainer from "./HogContainer";

class App extends Component {
  state = {
    hogs: hogs,
    selectedCategory: "All",
  };

  changeSelectedCategory = (pickedCat) => {
    this.setState({
      selectedCategory: pickedCat
    });
  };

  helperFunctionThatReturnsAnArray = () => {
    if (this.state.selectedCategory === "All") {
      return this.state.hogs;
    } else if (this.state.selectedCategory === "Greasy") {
      return this.state.hogs.filter((pig) => pig.greased);
    } else if (this.state.selectedCategory === "Clean") {
      return this.state.hogs.filter((pig) => !pig.greased);
    } else if (this.state.selectedCategory === "Name") {
      let copyOfArray = [...this.state.hogs];
      copyOfArray.sort((pigA, pigB) => {
        return pigA.name.localeCompare(pigB.name);
      });
      return copyOfArray;
    } else if (this.state.selectedCategory === "Weight") {
      let copyOfArray = [...this.state.hogs];
      copyOfArray.sort((pigA, pigB) => {
        return pigA.weight - pigB.weight;
      });
      return copyOfArray;
    }
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Search
          selectedCategory={this.state.selectedCategory}
          changeSelectedCategory={this.changeSelectedCategory}
        />
        <HogContainer hogs={this.helperFunctionThatReturnsAnArray()} />
      </div>
    );
  }
}

export default App;
