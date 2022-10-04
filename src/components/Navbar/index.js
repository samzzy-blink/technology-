import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElement'

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <h1>Logo</h1>
            </NavLink>
            <Bars/>
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/services" activeStyle>
                    Services
                </NavLink>
                <NavLink to="/sign-up" activeStyle>
                        Our Works
                </NavLink>
                <NavLink to="/contact" activeStyle>
                    Contact Us
                </NavLink>
                
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">Request For Demo</NavBtnLink>
            </NavBtn>
        </Nav>
    </>
  )
}

export default Navbar