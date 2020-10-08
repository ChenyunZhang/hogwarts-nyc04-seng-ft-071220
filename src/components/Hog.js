import React from "react";
import augustus_gloop from "../hog-imgs/augustus_gloop.jpg";
import bay_of_pigs from "../hog-imgs/bay_of_pigs.jpg";
import cherub from "../hog-imgs/cherub.jpg";
import galaxy_note from "../hog-imgs/galaxy_note.jpg";
import HogDetail from "./HogDetail";

class Hog extends React.Component {
  state = {
    display: false
  }
  
  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }
  render() {
    

    return (
      <div className="container">
        <h4>{this.props.hog.name}</h4>
        <img src={augustus_gloop} alt="hogsImage" />
        <button className="delButton">x</button>
        <button onClick={this.handleClick}> Details</button>
        {this.state.display ? <HogDetail hogObj={this.props}/> : null}
      </div>
    );
  }
}

export default Hog;
