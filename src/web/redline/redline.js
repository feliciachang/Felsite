import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import HeaderComponent from "../HeaderComponent";

class RedLineCard extends Component {
  render() {
    return (
      <div style={{marginBottom: "10%"}}>
        <div style={{marginLeft: "10%", marginRight: "5%"}}>
          <div style={{paddingTop: "2%", paddingBottom: "5%"}}>
            <Row>
            <Col xs= "auto" sm="auto" md="auto" lg="4" xl="4">
            <div>
            <h1 >Processing Sketches</h1>
            <p>2020</p>
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
              <img className="image" src="https://felswebsite.s3.amazonaws.com/itjustsohappens1.jpg" />
          </Col>
          <Col xs = "auto" lg = "6">
              <img className="image" src="https://felswebsite.s3.amazonaws.com/itjustsohappens2.jpg" />
          </Col>
        </Row>
        <Row xs="2">
          <Col xs = "auto" lg = "6">
              <img className="image" src="https://felswebsite.s3.amazonaws.com/weallcrysometimes.jpg" />
          </Col>
          <Col xs = "auto" lg = "6">
              <img className="image" src="https://felswebsite.s3.amazonaws.com/friendlymonster1.jpg" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default RedLineCard;
