
import React from 'react'
import Hog from './Hog'

class HogContainer extends React.Component{

    hogsArr = this.props.hogs.map(hogObj => {
        return (
        <Hog 
        key = {hogObj.name}
        hog = {hogObj}
        />
        )
    } )

    render(){
        return(
            <div>
                {this.hogsArr}
            </div>
        )
    }
}

export default HogContainer