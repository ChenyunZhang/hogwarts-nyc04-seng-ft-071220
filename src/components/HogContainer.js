
import React from 'react'
import Hog from './Hog'

class HogContainer extends React.Component{

    
    render(){

        let hogsArr = this.props.hogs.map(hogObj => {
            return (
            <Hog 
            key = {hogObj.name}
            hog = {hogObj}
            />
            )
        } )

        return(
            
            <div className={"Outer-Container"}>
                {hogsArr}
            </div>
        )
    }
}

export default HogContainer