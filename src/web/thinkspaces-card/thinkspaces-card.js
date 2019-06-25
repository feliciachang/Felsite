import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./thinkspaces-card.css";

class ThinkspacesCard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <div>
              <div className="circlelogo-container">
                <img src="https://felswebsite.s3.amazonaws.com/thinkspacescircle.png" />
              </div>
              <div className="logo-container">
                <img src="https://felswebsite.s3.amazonaws.com/thinkspaceslogowhite.png" />
              </div>
            </div>
          </Col>
          <Col>
            <div className="poster-container">
              <img src="https://felswebsite.s3.amazonaws.com/thinkspacesposter.png" />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ThinkspacesCard;
