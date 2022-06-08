import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const title = {
    color: "#0D1321",
    padding: "15px",
    margin: "10px",
    fontFamily: "'JetBrains Mono', monospace"
}

const span = {
    backgroundColor: "#3E5C76",
    color: "#fff",
    fontWeight: "bold",
    fontStyle: "italic"
}

const Header = () => {
    return (
        <div>
            <Link to="/"><h1 style={title}>A Day Before I <span style={span}>MET</span></h1></Link>
            <Nav />
        </div>
    )
}

export default Header