import React, { Fragment } from "react";

class HelloWorld extends React.Component {


  handleTrueClick = () =>{
    this.props.filterGrease()
  }
  // handleFalseClick = () =>{
    
  // }

  render() {
    return (
      <div>
        <button onClick={this.handleTrueClick} >greased: true</button>
        {/* <button onClick={this.handleFalseClick}>greased: false</button> */}
      </div>
    );
  }
}

export default HelloWorld;
