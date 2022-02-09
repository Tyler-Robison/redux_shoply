import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {

    return (
        <ul>
            <li>
                <NavLink className="nav-link" to="/products">
                    Product List
                </NavLink>
            </li>
            <li>
                <NavLink className="nav-link" to="/cart">
                    Cart
                </NavLink>
            </li>
        </ul>
    )

}

export default NavBar;