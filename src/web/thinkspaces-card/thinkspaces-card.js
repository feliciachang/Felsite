import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./thinkspaces-card.css";

class ThinkspacesCard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <div style={{ paddingTop: 30 }}>
              <div className="circlelogo-container">
                <img
                  src={require("../../assets/ThinkspacesLogoFinalBorder.png")}
                />
              </div>
              <div className="logo-container">
                <img src={require("../../assets/ThinkspacesTypelogo.png")} />
              </div>
            </div>
          </Col>
          <Col>
            <div className="poster-container">
              <img src={require("../../assets/ThinkspacesPoster22019.png")} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ThinkspacesCard;
