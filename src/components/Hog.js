import React from "react";
import augustus_gloop from "../hog-imgs/augustus_gloop.jpg";

class Hog extends React.Component {

  render() {
    
    console.log("hello");

    return (
      <li className="container">
        <img src={augustus_gloop} alt="augustus_gloop" />
        <button className="delButton">x</button>
        <div>
          specialty: <span>{this.props.specialty}</span>
        </div>
        <div>
          weight: <span>{this.props.weight}</span>
        </div>
      </li>
    );
  }
}

export default Hog;
