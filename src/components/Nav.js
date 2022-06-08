import React from "react";
import { Link } from "react-router-dom";

const nav = {
    display: "flex",
    justifyContent: "center",
    gap: "10px 30px",
    flexFlow: "row wrap",
    color: "#748CAB",
}

const Nav = () => {
    return (
        <div>
            <header>
                <nav style={nav}>
                    <Link to="/">
                        <h3>HOME</h3>
                    </Link>
                    <Link to="/department">
                        <h3>DEPARTMENT</h3>
                    </Link>
                    <Link to="/pick">
                        <h3>PICK</h3>
                    </Link>
                    <Link to="/about">
                        <h3>ABOUT</h3>
                    </Link>
                </nav>
            </header>
        </div>
    )
}

export default Nav