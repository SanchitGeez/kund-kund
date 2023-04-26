import React from "react";
import Navbar from "../Navbar";
import Slides from "../Slides";
import Searchbar from "../Searchbar";
import Displaycourses from "../Displaycourses";
import Musicbar from "../Musicbar";
import Statsbar from "../Statsbar";
import Topcategory from "../Topcategory";

function Homepage() {
    return <div>
        <Navbar/>
        <Slides/>
        <Searchbar/>

        <Statsbar/>
        <Displaycourses/>
        <Musicbar/>
        <Topcategory/>
        
    </div>
}

export default Homepage;