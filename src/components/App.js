import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogContainer from "./HogContainer";

class App extends Component {
  state = {
    hogs: hogs,
  };

  filterGrease = () => {
    let filteredArray = hogs.filter((hog) => hog.greased === true)
    this.setState({
      hogs: filteredArray
    })
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld
          hogs={this.state.hogs}
          greased={this.filterGrease}
        />
        <HogContainer hogs={this.state.hogs} />
      </div>
    );
  }
}

export default App;
