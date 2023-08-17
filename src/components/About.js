import React from "react";
import src from "../images/met2.jpg"

const box = {
    color: "#1D2D44",
    padding: "15px",
    margin: "20px",
    border: "1px solid #1D2D44",
}

const textBox = {
    color: "#1D2D44",
    padding: "15px",
    margin: "20px",
    padding: "10px",
    border: "1px solid #1D2D44",
    textAlign: "left"
}

const img = {
    width: "70%"
}

const span = {
    color: "#3E5C76",
    fontWeight: "bold"
}

const About = () => {
    return (
        <div style={box}>
            <img src={src} alt="#" style={img}/>
            <h1>About the Museum</h1>
            <div style={textBox}>
            <p>The Metropolitan Museum of Art presents over 5,000 years of art from around the world for everyone to experience and enjoy. The Museum lives in two iconic sites in New York City—<a href="https://www.metmuseum.org/visit/plan-your-visit/met-fifth-avenue">The Met Fifth Avenue</a> and <a href="https://www.metmuseum.org/visit/plan-your-visit/met-cloisters">The Met Cloisters</a>. Millions of people also take part in The Met experience online.</p>

            <p>Since its founding in 1870, The Met has always aspired to be more than a treasury of rare and beautiful objects. Every day, art comes alive in the Museum's galleries and through its exhibitions and events, revealing new ideas and unexpected connections across time and across cultures.</p>
            </div>

            <h2>Mission Statement</h2>
            <div style={textBox}>
            <p>The Met was founded on April 13, 1870, "to be located in the City of New York, for the purpose of establishing and maintaining in said city a Museum and library of art, of encouraging and developing the study of the fine arts, and the application of arts to manufacture and practical life, of advancing the general knowledge of kindred subjects, and, to that end, of furnishing popular instruction."</p>

            <p>This statement of purpose has guided the Museum for over 140 years.</p>

            <p>On January 13, 2015, the Trustees of The Metropolitan Museum of Art reaffirmed this statement of purpose and supplemented it with the following statement of mission:</p>

            <p>The Metropolitan Museum of Art collects, studies, conserves, and presents significant works of art across all times and cultures in order to connect people to creativity, knowledge, and ideas.</p>
            </div>
            <br />
            <hr style={{ borderTop: "1px solid #1D2D44"}} />

            <h1>About the Developer</h1>
            <div style={box}>
            <p>Software Engineer <span style={span}>Bom Kim</span></p>
            <div><p>
                <a href="https://github.com"> GITHUB </a>| 
                <a href="https://www.linkedin.com/in/bomaprilkim/"> LINKEDIN </a>|
                <a href="https://www.bomkim.info"> PORTFOLIO </a>
                </p>
            </div>
            </div>
        </div>
    )
}

export default About
