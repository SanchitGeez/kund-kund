import React from "react";
import Stats from "../images/Stats_newdesign.png"

function Statsbar() {
    return <div className="statsbg">
        {/* <div className="statsbarbg">
            <p className="statsbutton"> 9000+ प्रवचन<br></br>
                            गुरुदेव कानजी स्वामी के प्रवचन</p>
            <p className="statsbutton">200+ ग्रंथ<br></br>
                              जिसमें शब्दों को सर्च किया जा सके</p>
            <p className="statsbutton">50+ इंटेरकटिव विडिओ<br></br>
                            टेक्नॉलजी के साथ मर्म को समझें</p>
        </div> */}
        <img src={Stats}  className="stats-image" alt="stats image"></img>
    </div>
}

export default Statsbar;