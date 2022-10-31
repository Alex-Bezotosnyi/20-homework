import React from "react";
import {NavLink} from "react-router-dom";
import navbarCSS from "./style/navbar.module.css"

const Navbar = (props) => {
    return (
        <nav className={navbarCSS.nav}>
            <NavLink to="/" className={navbarCSS.title_wrapper}>Homework</NavLink>
            <ul>
                <NavLink to="/src/pages/posts/main-posts">Posts</NavLink>
                <NavLink to="/gallery">Gallery</NavLink>
                <NavLink to="/src/pages/contacts/">Contacts</NavLink>
            </ul>
        </nav>
    )
}

export default Navbar;