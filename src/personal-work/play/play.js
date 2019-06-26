import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class PlayCard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <div className="image-container">
              <img src="https://felswebsite.s3.amazonaws.com/play1.JPG" />
            </div>
          </Col>
          <Col>
            <div className="image-container">
              <img src="https://felswebsite.s3.amazonaws.com/play2.JPG" />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default PlayCard;
