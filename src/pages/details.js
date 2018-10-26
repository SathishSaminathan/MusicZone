import React, { PureComponent } from 'react'
import NavBar from "../components/NavBar";
import { Row,Col } from "react-bootstrap";
import { Card } from "antd";
import { connect } from "react-redux";

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
                            {this.props.userFirstName}
                        </Col>
                        <Col md={4} className="card-text">
                            Last Name:
                        </Col>
                        <Col md={6} className="card-text">
                            {this.props.userLastName}
                        </Col>
                        <Col md={4} className="card-text">
                            Email:
                        </Col>
                        <Col md={6} className="card-text">
                            {this.props.email}
                        </Col>
                    </Row>
                </Card>
                <Card
                    title="User Interested in..."
                    style={{ width: 500 }}
                >
                    <div className="tags">
                        {/* <span>
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
                        </span> */}
                        {this.props.selectedTags.map((e, id) =>
                            <span>
                                {e.language}
                            </span>
                        )}
                    </div>
                </Card>
          </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    debugger
    return {
        selectedTags : state.signUp.selectedTags,
        userFirstName: state.signUp.userFirstName,
        userLastName: state.signUp.userLastName,
        email: state.signUp.email        
    };
};

export default connect(mapStateToProps) (Details);