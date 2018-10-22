import React from "react";
import "./Header.css";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
const Header = () => (

    <Navbar className="myNav" light>
        <NavbarBrand href="/" className="mr-auto link">TopTen</NavbarBrand>
    </Navbar>

)

export default Header;