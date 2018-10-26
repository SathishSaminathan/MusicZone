import React, { PureComponent } from 'react'
import { Row, Col, Button, Navbar,Nav,NavItem,NavDropdown,MenuItem, Image } from "react-bootstrap";
import "../assets/styles/home.css";

class NavBar extends PureComponent {
  render() {
    return (
      <div>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand" className="brand-name">Musi<span style={{color: "white"}}>cZ</span>one...</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#" className="menu-items">
              LOGIN
            </NavItem>
            <NavItem eventKey={2} href="#" className="menu-items">
              SIGN UP 
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>        
      </div>
    )
  }
}

export default NavBar;