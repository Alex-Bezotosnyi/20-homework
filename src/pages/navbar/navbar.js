import React from "react";
import {NavLink} from "react-router-dom";
import navbarCSS from "./style/navbar.module.css"

const Navbar = (props) => {
    return (
        <nav className={navbarCSS.nav}>
            <ul>
                <NavLink to="/" className={navbarCSS.title_wrapper}>Home</NavLink>
                <NavLink to="/src/pages/posts/main-posts">Posts</NavLink>
                <NavLink to="/gallery">Gallery</NavLink>
                <NavLink to="/src/pages/contacts/">Contacts</NavLink>
            </ul>
        </nav>
    )
}

export default Navbar;
