import React,{useContext, useState} from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavItem,
    NavLink,
    NavbarText,
    Nav} from "reactstrap"

import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContetx";

const Header = () =>{
    const context = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>(setIsOpen(!isOpen));
    return(
        <Navbar color="info" light expand="md">
            <NavbarBrand><Link to="/" className="text-white">LCO Getfire app</Link></NavbarBrand>
            <NavbarText className="text-white">
                {
                    context.user?.email ? context.user.email : "" 
                }
            </NavbarText>
            <NavbarToggler onClick={toggle}></NavbarToggler>
            <Collapse navbar isOpen={isOpen}>
            <Nav className="ms-auto" >
                {
                    context.user ? (
                    <NavItem>
                        <NavLink className="text-white" onClick={()=>{context.setUser(null)}} to="/">
                            Logout
                        </NavLink>
                    </NavItem>) : (
                        <>
                        <NavItem>
                        <NavLink className="text-white" tag={Link} to="/signup">
                                Signup
                            </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink className="text-white" tag={Link} to="/signin">
                                Signin
                            </NavLink>
                        </NavItem>
                        </>
                    )
                }
                
                
            </Nav>
            </Collapse>
        </Navbar>
    )

}

export default Header;