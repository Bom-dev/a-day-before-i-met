import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const title = {
    color: "navy",
    padding: "15px",
    margin: "10px",
  }

const Header = () => {
    return (
        <div>
            <Link to="/"><h1 style={title}>A Day Before I MET</h1></Link>
            <Nav />
        </div>
    )
}

export default Header