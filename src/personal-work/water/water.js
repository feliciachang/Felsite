import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class WaterCard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <div className="image-container">
              <img src="https://felswebsite.s3.amazonaws.com/water1.png" />
            </div>
          </Col>
          <Col>
            <div className="image-container">
              <img src="https://felswebsite.s3.amazonaws.com/water2.png" />
            </div>
          </Col>
        </Row>
        <Row>
        <Col>
        <div className="image-container">
          <img src="https://felswebsite.s3.amazonaws.com/water3.png" />
        </div>
        </Col>
        </Row>
      </div>
    );
  }
}

export default WaterCard;
