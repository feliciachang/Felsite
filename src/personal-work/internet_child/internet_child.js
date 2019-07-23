import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class InternetCard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <div className="image-container">
              <img src="https://felswebsite.s3.amazonaws.com/InternetChild_0853.JPG" />
            </div>
          </Col>
          <Col>
            <div className="image-container">
              <img src="https://felswebsite.s3.amazonaws.com/InternetChild_0856.jpg" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="image-container">
              <img src="https://felswebsite.s3.amazonaws.com/InternetChild_0863.JPG" />
            </div>
          </Col>
          <Col>
            <div className="image-container">
              <img src="https://felswebsite.s3.amazonaws.com/InternetChild_0864.JPG" />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default InternetCard;
