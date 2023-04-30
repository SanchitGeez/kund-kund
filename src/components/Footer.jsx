import React from "react"; 

function Footer(){
    return <div className="footer">
        <div className="contact-us">
            <h2 className="contact-us-text">CONTACT US</h2>
            <form className="contact-us-form">
                <input className="contact-us-input" placeholder="Name"></input>
                <input className="contact-us-input" placeholder="Email"></input>
                <input className="contact-us-input message-input" placeholder="Message"></input>
            </form>
        </div>
    </div>
}

export default Footer;