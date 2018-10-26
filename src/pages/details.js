import React, { PureComponent } from 'react'
import NavBar from "../components/NavBar";
import { Row,Col } from "react-bootstrap";
import { Card } from "antd";

import "../assets/styles/home.css";

class Details extends PureComponent {
  render() {
    return (
      <div>
          <NavBar/>
          <Row
            style={{
                display:'flex',
                flexDirection:"row",
                justifyContent:"center",
                marginTop:"15%"
            }}
          >
                <Card
                    title="User Details"
                    style={{ width: 500 }}
                >
                    <Row>
                        <Col md={4} className="card-text">
                            User Name:
                        </Col>
                        <Col md={6} className="card-text">
                            Sathish
                        </Col>
                        <Col md={4} className="card-text">
                            Last Name:
                        </Col>
                        <Col md={6} className="card-text">
                            Saminathan
                        </Col>
                        <Col md={4} className="card-text">
                            Email:
                        </Col>
                        <Col md={6} className="card-text">
                            sathishcse1975@gmaill.com
                        </Col>
                    </Row>
                </Card>
                <Card
                    title="User Interested in..."
                    style={{ width: 500 }}
                >
                    <div className="tags">
                        <span>
                            Tamil
                        </span>
                        <span>
                            English
                        </span>
                        <span>
                            Tamil
                        </span>
                        <span>
                            English
                        </span>
                    </div>
                </Card>
          </Row>
      </div>
    )
  }
}

export default Details;