import React from "react";

class HogDetail extends React.Component {
    render(){

        return(
            
            <div>
                <li>Specialty: {this.props.hogObj.hog.specialty}</li>
                <li>Greased: {String(this.props.hogObj.hog.greased)}</li>
                <li>Weight: {String(this.props.hogObj.hog.weight)}</li>
                <li>Highest medal achieved: {this.props.hogObj.hog['highest medal achieved']}</li>
            </div>
        
        )
    }
}

export default HogDetail;