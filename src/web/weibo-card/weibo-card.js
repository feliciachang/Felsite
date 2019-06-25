import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class WeiboCard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <div className="image-container">
              <img src={require("../../assets/appicon_bw.png")} />
            </div>
          </Col>
          <Col>
            <div className="image-container">
              <img src={require("../../assets/appicon_color.png")} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default WeiboCard;
