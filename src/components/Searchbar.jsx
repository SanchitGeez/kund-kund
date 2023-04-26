import React from "react";
import Searchbutton from '../images/Searchbutton.png';

function Searchclick(){
    console.log("Clicked")
}

function handleChange(event){
    console.log(event.target.value)
}

function Searchbar(){
    return <div className="searchbg">
        <input  onChange={handleChange} type="text" placeholder="Search" className="searchbar"/>
        <img src={Searchbutton} alt="searchicon" className="searchbutton" onClick={Searchclick}></img>
    </div>
}

export default Searchbar