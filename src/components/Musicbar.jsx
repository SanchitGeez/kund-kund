import React from "react";
import Musicicon from '../images/Musicicon_newdesign.png';
import redRectangle from "../images/redRectangle.png"

function Musicbar() {
    return <div > 
             <div className="yellow-line music-bar-line music-bar-line-top"></div>       
        <div className="musicbarbg">
            <img src={redRectangle} alt="rect" className="red-rectangle music-rectangle"></img>
            <img src={Musicicon} alt="logohere" className="musicicon"></img>
            <div className="musicbartxt"> 
                <h2>भजन और पूजा संग्रह</h2>
                <p>पक्तियाँ भजन पूजा गाथा श्लोक आदि ढूँढे</p>
            </div>
            <button className="musicbarbutton"> GET STARTED</button>
        </div>
        <div className="yellow-line music-bar-line music-bar-line-bottom"></div>       

        </div>
}

export default Musicbar;