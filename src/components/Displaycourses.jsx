import React from "react";
import Coursecard from "./Coursecard";
import redRectangle from "../images/redRectangle.png"
import DispayCourseslist from "../Displaycourseslist";
import { Link } from 'react-router-dom';

function Displaycourses() {
    return <div className="displaycourses">
        <div className="displaycourses-title">
            <img src={redRectangle} alt="rect" className="red-rectangle"></img>
            <h1 className="topcourses-title-text">TOP COURSES</h1>
            <img src={redRectangle} alt="rect" className="red-rectangle"></img>
        </div>
        <div className="yellow-line">

        </div>
        <div className="displaycourses-cards">
            <Coursecard
                img={DispayCourseslist[0].img}
                coursename ={DispayCourseslist[0].coursename}
            />

            <Coursecard
                img={DispayCourseslist[1].img}
                coursename ={DispayCourseslist[1].coursename}
            />

            <Coursecard
                img={DispayCourseslist[2].img}
                coursename ={DispayCourseslist[2].coursename}
            />

            <Coursecard
                img={DispayCourseslist[3].img}
                coursename ={DispayCourseslist[3].coursename}
            />
        </div>

        {/* <Link to="https://drive.google.com/file/d/1ro1uVa1GwXIq-KTaRSCPVAPgqMTsFxm-/view?usp=sharing" target="_blank" className="displaycourseslink">
            <Coursecard
                img={DispayCourseslist[0].img}
                coursename ={DispayCourseslist[0].coursename}
            />
        </Link>
        <Link to="https://drive.google.com/file/d/1ro1uVa1GwXIq-KTaRSCPVAPgqMTsFxm-/view?usp=sharing" target="_blank" className="displaycourseslink">
            <Coursecard
                img={DispayCourseslist[1].img}
                coursename ={DispayCourseslist[1].coursename}
            />
        </Link>
        <Link to="https://drive.google.com/file/d/1ro1uVa1GwXIq-KTaRSCPVAPgqMTsFxm-/view?usp=sharing" target="_blank" className="displaycourseslink">
            <Coursecard
                img={DispayCourseslist[2].img}
                coursename ={DispayCourseslist[2].coursename}
            />
        </Link>
        <Link to="https://drive.google.com/file/d/1ro1uVa1GwXIq-KTaRSCPVAPgqMTsFxm-/view?usp=sharing" target="_blank" className="displaycourseslink">
            <Coursecard
                img={DispayCourseslist[3].img}
                coursename ={DispayCourseslist[3].coursename}
            />
        </Link>
        <Link to="https://drive.google.com/file/d/1ro1uVa1GwXIq-KTaRSCPVAPgqMTsFxm-/view?usp=sharing" target="_blank" className="displaycourseslink">
            <Coursecard
                img={DispayCourseslist[4].img}
                coursename ={DispayCourseslist[4].coursename}
            />
        </Link>
        <Link to="https://drive.google.com/file/d/1ro1uVa1GwXIq-KTaRSCPVAPgqMTsFxm-/view?usp=sharing" target="_blank" className="displaycourseslink">
            <Coursecard
                img={DispayCourseslist[5].img}
                coursename ={DispayCourseslist[5].coursename}
            />
        </Link>
        <Link to="https://drive.google.com/file/d/1ro1uVa1GwXIq-KTaRSCPVAPgqMTsFxm-/view?usp=sharing" target="_blank" className="displaycourseslink">
            <Coursecard
                img={DispayCourseslist[6].img}
                coursename ={DispayCourseslist[6].coursename}
            />
        </Link>
        <Link to="https://drive.google.com/file/d/1ro1uVa1GwXIq-KTaRSCPVAPgqMTsFxm-/view?usp=sharing" target="_blank" className="displaycourseslink">
            <Coursecard
                img={DispayCourseslist[7].img}
                coursename ={DispayCourseslist[7].coursename}
            />
        </Link> */}
    </div>
}

export default Displaycourses;