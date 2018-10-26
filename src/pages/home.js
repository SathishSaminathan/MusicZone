import React, { Component } from 'react'
import { Row, Col, Button } from "react-bootstrap";
import "typeface-roboto";
import NavBar from "../components/NavBar";
import {FormErrors} from "../components/FormErrors";
import { Redirect } from 'react-router-dom'

import "../assets/styles/home.css";

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstname:'',
      lastname:'',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleUserInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value}, 
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
  
    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }
  
  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  renderRedirect = () => {
    return <Redirect to='/about' />
  }

  render() {
    return (
      <div>
        <NavBar />
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
                  <input 
                    name="firstname" 
                    placeholder="FIRST NAME" 
                    value={this.state.firstname} 
                    onChange={(event) => this.handleUserInput(event)}
                  />
                </Col>
                <Col md={6}>
                  <input 
                    name="lastname" 
                    placeholder="LAST NAME" 
                    value={this.state.lastname}
                    onChange={(event) => this.handleUserInput(event)}
                  />
                </Col>
                <Col md={12}>
                  <label>CONTACT MAIL</label>
                </Col>
                <Col md={12}>
                  <input 
                    type="email" 
                    name="email" 
                    style={{ width:'90%'}} 
                    placeholder="EMAIL" 
                    value={this.state.email} 
                    onChange={(event) => this.handleUserInput(event)}
                  />
                </Col>
                <Col md={12} style={{ marginTop:10}}>
                  <input 
                    type="password" 
                    name="password" 
                    placeholder="ENTER THE PASSWORD" 
                    value={this.state.password}
                    onChange={(event) => this.handleUserInput(event)}
                  />
                </Col>
              </Row>
            </div>
            <Button 
              className="circle-btn" 
              disabled={!this.state.formValid}
              onClick={()=>this.renderRedirect()}
            >Next --></Button>
          </div>
        </div>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
      </div>
    )
  }
}

export default Home;