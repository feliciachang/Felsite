import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./contents.css";

class Contents extends Component {
  render() {
    return (
      <div style={{ margin: 40 }}>
        <h1 style={{ color: "#ff6e6e", fontWeight: "bold" }}>
          {" "}
          {"// Disciplines"}
        </h1>
        <br />
        <div style={{ marginLeft: 40 }}>
          <Row>
            <Col>
              <Row>
                <h3> {"Engineering"}</h3>
              </Row>
              <Row>Thinkspaces</Row>
              <Row>&emsp; Cofounder</Row>
              <Row>Conservify</Row>
              <Row>&emsp; Frontend Software </Row>
              <Row>&emsp; Engineer Intern</Row>
            </Col>
            <Col>
              <Row>
                <h3> {"Design"}</h3>
              </Row>
              <Row>Thinkspaces</Row>
              <Row>&emsp; UX/UI/Branding</Row>
              <Row>Conservify</Row>
              <Row>&emsp; UX/UI</Row>
              <Row>Samsara</Row>
              <Row>&emsp; Branding</Row>
              <Row>Sina Weibo</Row>
              <Row>&emsp; UI Intern</Row>
              <Row>Y Fashion House</Row>
              <Row>&emsp; Poster Design</Row>
            </Col>

            <Col>
              <Row>
                <h3> {"Photography"}</h3>
              </Row>
              <Row>Kalliope Magazine</Row>
              <Row>&emsp; Contributer</Row>
              <Row>Y Fashion House</Row>
              <Row>&emsp; Portraiture</Row>
              <Row>Sam in Wonderland</Row>
              <Row>&emsp; Portraiture</Row>
              <Row>Broken</Row>
              <Row>&emsp; Still Life</Row>
            </Col>

            <Col>
              <Row>
                <h3> {"Illustration + Painting"}</h3>
              </Row>
              <Row>(all personal work)</Row>
              <Row>pLaY</Row>
              <Row>&emsp; Digital Illustration</Row>
              <Row>Geworfenheit</Row>
              <Row>&emsp; Digital Type</Row>
              <Row>Prayer Room</Row>
              <Row>&emsp; Paiting</Row>
              <Row>PlantHeads</Row>
              <Row>&emsp; Illustration</Row>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Contents;
