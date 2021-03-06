import React from 'react'

// class Search extends React.Component{

//     handleChange = (e) =>{
//         this.props.changeSelectedCategory(e.target.value)
//     }

//     render(){
//         return(
//             <select value={this.props.selectedCategory} onChange={this.handleChange}> 
//                 <option value={"All"}>All Piggies</option>
//                 <option value={"Greasy"}>Greasy Pigs</option>
//                 <option value={"Clean"}>Clean Pigs</option>
//                 <option value={"Weight"}>Sort By Weight</option>
//                 <option value={"Name"}>Sort By Name</option>
//             </select>
//         )
//     }
// }

const Search = (props) =>{
        
    let handleChange = (e) =>{
            return (props.changeSelectedCategory(e.target.value))
        }

        return(
        <select value={props.selectedCategory} onChange={handleChange}> 
            <option value={"All"}>All Piggies</option>
            <option value={"Greasy"}>Greasy Pigs</option>
            <option value={"Clean"}>Clean Pigs</option>
            <option value={"Weight"}>Sort By Weight</option>
            <option value={"Name"}>Sort By Name</option>
        </select>
    )
}

export default Search