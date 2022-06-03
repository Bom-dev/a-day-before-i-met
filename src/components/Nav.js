import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <header>
                <nav>
                    <Link to="/">
                        <h3>Home</h3>
                    </Link>
                    <Link to="/department">
                        <h3>Department</h3>
                    </Link>
                    <Link to="/pick">
                        <h3>Pick</h3>
                    </Link>
                    <Link to="/about">
                        <h3>About</h3>
                    </Link>
                </nav>
            </header>
        </div>
    )
}

export default Nav