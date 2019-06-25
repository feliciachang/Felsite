import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./samsara-card.css";

class SamsaraCard extends Component {
  render() {
    return (
      <div>
        <div className="image-container">
          <img src={require("../../assets/samasaraa.png")} />
        </div>
        <br />
        <br />
        <Row>
          <Col>
            <div style={{ textAlign: "center" }}>Earthwater</div>
            <div className="image-container">
              <img src={require("../../assets/1DX_7977-2.jpg")} />
            </div>
          </Col>
          <Col>
            <div style={{ textAlign: "center" }}>Sunset Rose</div>
            <div className="image-container">
              <img src={require("../../assets/1DX_7977-9.jpg")} />
            </div>
          </Col>
          <Col>
            <div style={{ textAlign: "center" }}>Jasmine</div>
            <div className="image-container">
              <img src={require("../../assets/1DX_7977-6.jpg")} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SamsaraCard;
