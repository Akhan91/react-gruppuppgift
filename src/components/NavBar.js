import React from 'react'
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <div id="nav-wrapper">
        <div className="header">blog.</div>
        <nav className="nav">
            <ul>
                <Link to="/">home.</Link>
                <Link to="/manage-items">manage posts.</Link>
                <Link to="/create-item">create a new post.</Link>
            </ul>
        </nav>
        </div>
    )
}

export default NavBar
