import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./samsara-card.css";

import LazyLoad from "react-lazyload";

class SamsaraCard extends Component {
  render() {
    return (
      <div>
        <div className="image-container">
          <LazyLoad>
            <img src="https://felswebsite.s3.amazonaws.com/Untitled-1.png" />
          </LazyLoad>
        </div>
        <br />
        <br />
        <Row>
          <Col>
            <div style={{ textAlign: "center" }}>Earthwater</div>
            <div className="image-container">
              <LazyLoad>
                <img src="https://felswebsite.s3.amazonaws.com/samsaraearth.jpg" />
              </LazyLoad>
            </div>
          </Col>
          <Col>
            <div style={{ textAlign: "center" }}>Sunset Rose</div>
            <div className="image-container">
              <LazyLoad>
                <img src="https://felswebsite.s3.amazonaws.com/samsararose.jpg" />
              </LazyLoad>
            </div>
          </Col>
          <Col>
            <div style={{ textAlign: "center" }}>Jasmine</div>
            <div className="image-container">
              <LazyLoad>
                <img src="https://felswebsite.s3.amazonaws.com/samsarajasmine2.jpg" />
              </LazyLoad>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SamsaraCard;
