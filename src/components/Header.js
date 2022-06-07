import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
    return (
        <div>
            <Link to="/"><h3>A Day Before I MET</h3></Link>
            <Nav />
        </div>
    )
}

export default Header