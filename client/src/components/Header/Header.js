import React from "react";
import "./Header.css";
import {default as SmallIcon} from "../SmallIcon/index"
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
const Header = () => (

    <Navbar className="myNav" light>
        <NavbarBrand href="/" className="mr-auto link">
            <span className="logo">
                Top<SmallIcon/>
            </span>
        </NavbarBrand>
    </Navbar>

)

export default Header;