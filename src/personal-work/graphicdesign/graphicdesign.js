import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class GraphicCard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <div className="image-container">
              <img src="https://felswebsite.s3.amazonaws.com/intrographic/unnamed.jpg" />
            </div>
          </Col>
          <Col>
            <div className="image-container">
              <img src="https://felswebsite.s3.amazonaws.com/helvetica1.jpg" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="image-container">
              <img src="https://felswebsite.s3.amazonaws.com/graphic2018_1.png" />
            </div>
          </Col>
          <Col>
            <div className="image-container">
              <img src="https://felswebsite.s3.amazonaws.com/graphic2018_2.png" />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default GraphicCard;
