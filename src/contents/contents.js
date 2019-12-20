import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./contents.css";

class Contents extends Component {
  render() {
    return (
      <div >
        <div >
          <Row>
            <Col>
              <Row>
                <h4> {"Currently"}</h4>
              </Row>
              <Row>Junior studying CS/Art @ Yale</Row>
              <Row>VP @ Contrary</Row>
            </Col>
            <Col>
              <Row>
                <h4> {"Previously"}</h4>
              </Row>
              <Row>SWE Intern @ Conservify </Row>
              
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Contents;
