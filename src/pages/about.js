import React, { Component } from 'react'
import { Tag } from 'antd';
import NavBar from "../components/NavBar";
import { Row, Col, Button } from "react-bootstrap";

import "../assets/styles/home.css"; 

const CheckableTag = Tag.CheckableTag;
const tagsFromServer = ['Movies', 'Books', 'Music', 'Sports'];

class About extends Component {
  state = {
    selectedTags: [],
  };

  handleChange(tag, checked) {
    const { selectedTags } = this.state;
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter(t => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    this.setState({ selectedTags: nextSelectedTags });
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
                Welcome<span style={{color:"white"}}>!!!</span>
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
            <Button className="circle-btn">Next --></Button>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
