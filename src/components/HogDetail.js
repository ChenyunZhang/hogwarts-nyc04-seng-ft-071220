import React from "react";

class HogDetail extends React.Component {
  render() {
       let {specialty, greased, weight} = this.props.hogObj.hog

    return (
      <div>
        <li>Specialty: {specialty}</li>
        <li>Greased: {String(greased)}</li>
        <li>Weight: {weight} Tons</li>
        <li>
          Medal:{this.props.hogObj.hog["highest medal achieved"]}
        </li>
      </div>
    );
  }
}

export default HogDetail;
