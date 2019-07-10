import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./samsara-card.css";

class SamsaraCard extends Component {
  render() {
    return (
      <div>
        <div className="image-container">
          <img src="https://felswebsite.s3.amazonaws.com/Untitled-1.png" />
        </div>
        <br />
        <br />
        <Row>
          <Col>
            <div style={{ textAlign: "center" }}>Earthwater</div>
            <div className="image-container">
              <img src="https://felswebsite.s3.amazonaws.com/samsaraearth.jpg" />
            </div>
          </Col>
          <Col>
            <div style={{ textAlign: "center" }}>Sunset Rose</div>
            <div className="image-container">
              <img src="https://felswebsite.s3.amazonaws.com/samsararose.jpg" />
            </div>
          </Col>
          <Col>
            <div style={{ textAlign: "center" }}>Jasmine</div>
            <div className="image-container">
              <img src="https://felswebsite.s3.amazonaws.com/samsarajasmine2.jpg" />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SamsaraCard;
