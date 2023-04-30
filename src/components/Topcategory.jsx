import React from "react";

function  Topcategory() {
    return <div className="topcategorybg">
            <h1 className="categorytext"> Top Categories </h1>
            <div className="topcategory-buttons-all">
                <div className="topcategory-buttons1">
                    <button type="submit" className="topcategogybutton"> Interactive Puzzel </button>
                    <button type="submit" className="topcategogybutton"> विद्वानों द्वारा रचित ग्रंथ </button>

                </div>

                <div className="topcategory-buttons2">
                    <button type="submit" className="topcategogybutton"> आचार्यों द्वारा रचित ग्रंथ </button>
                    <button type="submit" className="topcategogybutton"> शब्दावली </button>
                </div>
            </div>
            
    </div>
}


export default Topcategory;