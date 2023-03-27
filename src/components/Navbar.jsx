import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return <div >
        <div className="navbarbg">
            <Link to="/">
                <img src="https://kundkund.com/wp-content/uploads/2021/05/1.png" alt="logohere" className="logo"></img>
            </Link>
            <div className="navbarmenubuttons">
                <Link to="/allcourses">
                    <button className="navbarmenu"> COURSES</button>
                </Link>

                <button className="navbarmenu"> FEATURES</button>
                <button className="navbarmenu"> BLOG</button>
                <button className="navbarmenu"> GALERY</button>
                <button className="navbarlogin"> LOGIN</button>
            </div>
            
        </div>
        
        <div className="yellow-line"></div>
    </div>
}

export default Navbar;