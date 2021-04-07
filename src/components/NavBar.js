import React from 'react'
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <nav className="nav">
            <ul>
                <Link to="/create-item">create a new post</Link>
                <Link to="/manage-items">manage posts</Link>
                <Link to="/items">home</Link>
            </ul>
        </nav>
    )
}

export default NavBar
