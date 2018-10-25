import React, { Component } from 'react'
import { Row, Col, Button, Navbar,Nav,NavItem,NavDropdown,MenuItem, Image } from "react-bootstrap";
import "../assets/styles/home.css";
import "typeface-roboto";

class Home extends Component {
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
        <div>
          <div>
            <div
              style={{
                border: "1px solid #0000002e",
                width:400,
                height:355,
                borderRadius:8,
                margin:"auto",
                marginTop:"20vh",
                boxShadow:'2px 4px 15px rgba(68,68,68,0.6)',
                backgroundColor:"#2e2e2e"
              }}
            >
            <div
              style={{
                borderBottom:'1px solid red',
                height:52,
                display:"flex",
                flexDirection:'row',
                color:"white",
                backgroundColor:"#2e2e2e",
                borderRadius:8,
                borderBottomLeftRadius:1,
                borderBottomRightRadius:1
              }}
            >
              <span
                style={{
                  marginTop: "auto",
                  fontSize: 27,
                  color:"red",
                  paddingLeft:10
                }}
              >
                Welcome<span style={{color:"white"}}>!!!</span>
              </span>
            </div>                
              <Row>
                <Col md={12}>
                  <label>VISIBLE AS</label>
                </Col>
                <Col md={6}>
                  <input placeholder="FIRST NAME"/>
                </Col>
                <Col md={6}>
                  <input placeholder="LAST NAME"/>
                </Col>
                <Col md={12}>
                  <label>CONTACT MAIL</label>
                </Col>
                <Col md={12}>
                  <input style={{ width:'90%'}} placeholder="EMAIL"/>
                </Col>
                <Col md={12} style={{ marginTop:10}}>
                  <input type="password" placeholder="ENTER THE PASSWORD"/>
                </Col>
              </Row>
            </div>
            <Button className="circle-btn">Next --></Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;