import React from "react";
import HogDetail from "./HogDetail";

class Hog extends React.Component {
  state = {
    display: false,
  };

  handleClick = () => {
    let newBoolean = !this.state.display;
    this.setState({
      display: newBoolean,
    });
  };
  render() {
    let imageName = this.props.hog.name.toLowerCase().replace(/ /g, "_");
    let hogImage = require(`../hog-imgs/${imageName}.jpg`)

    return (
      <div className="container">
        <h4>{this.props.hog.name}</h4>
        <div>
          <button className="delButton">x</button>
        </div>
        <img src={hogImage} alt={imageName} />
        <div>
          <button onClick={this.handleClick}> Details</button>
        </div>
        {this.state.display ? <HogDetail hogObj={this.props} /> : null}
      </div>
    );
  }
}

export default Hog;
