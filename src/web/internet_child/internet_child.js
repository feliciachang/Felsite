import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import HeaderComponent from "../HeaderComponent";

class InternetCard extends Component {
  render() {
    return (
      <div style={{marginBottom: "10%"}}>
        <div style={{marginLeft: "10%", marginRight: "5%"}}>
          <div style={{paddingTop: "2%", paddingBottom: "5%"}}>
            <Row>
            <Col xs= "auto" sm="auto" md="auto" lg="4" xl="4">
            <div>
            <h1 >Internet Child</h1>
            <p>Creator | 2019</p>
            </div>
            </Col>
            <Col>
            <div style = {{color: "gray"}}>
            <p></p>
            </div>
            </Col>
            </Row>
          </div>
        </div>
        <Row xs="2">
          <Col xs = "auto" lg = "6">
              <img className="image" src="https://felswebsite.s3.amazonaws.com/InternetChild_0853.JPG" />
          </Col>
          <Col xs = "auto" lg = "6">
              <img className="image" src="https://felswebsite.s3.amazonaws.com/InternetChild_0856.jpg" />
          </Col>
        </Row>
        <Row xs="2">
          <Col xs = "auto" lg = "6">
              <img className="image" src="https://felswebsite.s3.amazonaws.com/InternetChild_0863.JPG" />
          </Col>
          <Col xs = "auto" lg = "6">
              <img className="image" src="https://felswebsite.s3.amazonaws.com/InternetChild_0864.JPG" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default InternetCard;
