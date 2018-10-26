import React, { Component } from 'react'
import { Tag } from 'antd';
import NavBar from "../components/NavBar";
import { Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";

import "../assets/styles/home.css"; 
import { sample } from '../store/actions/signUpAction';

const CheckableTag = Tag.CheckableTag;
const tagsFromServer = ['Tamil', 'English', 'Kannada', 'Telugu'];

class SelectLanguage extends Component {
  state = {
    selectedTags: [],
  };

  handleChange(tag, checked) {
    this.props.sample(tag);
    const { selectedTags } = this.state;
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter(t => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    this.setState({ selectedTags: nextSelectedTags });
  }

  renderRedirect = () => {
    this.props.history.push("/details")
  }

  render() {
    const { selectedTags } = this.state;

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
                Welcome<span style={{color:"white"}}>!!!{this.props.userFirstName}</span>
              </span>
            </div>                
              <Row>
                <Col md={12}>
                  <label>select your preferrered Languages...</label>
                </Col>
                {tagsFromServer.map(tag => (
                  <CheckableTag
                    key={tag}
                    checked={selectedTags.indexOf(tag) > -1}
                    onChange={checked => this.handleChange(tag, checked)}
                  >
                    {tag}
                  </CheckableTag>
                ))}
              </Row>
            </div>
            <Button className="circle-btn" onClick={()=>{this.renderRedirect()}}>Next --></Button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  debugger
  return {
    userFirstName : state.signUp.userFirstName
  };
};

const mapDispatchToProps = dispatch => {
  return{
    sample: (selectedTags) => dispatch(sample(selectedTags))
      };
  };

export default connect(mapStateToProps,mapDispatchToProps) (SelectLanguage);
