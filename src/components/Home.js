import React from "react";
import src from "../images/met3.webp"

const textBox = {
    color: "#1D2D44",
    padding: "15px",
    margin: "20px",
    border: "1px solid #1D2D44",
}

const Home = () => {
    return (
        <div style={textBox}>
            <img src={src} alt="#"/>
            <h3>Met is always busy and huge. Plan your trip before you visit MET in person!</h3>
            <p>Check <a href="/department">Department List</a> and choose whatever you like.</p>
        </div>
    )
}

export default Home