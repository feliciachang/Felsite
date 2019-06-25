import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import "./experience-card.css";

class ExperienceCard2 extends Component {
  state = {
    photoDisplay: false
  };

  render() {
    const {
      name,
      date,
      position,
      tools,
      graph1,
      graph2,
      graph3,
      graphics,
      mainPhoto
    } = this.props;
    console.log(this.state.photoDisplay);
    return (
      <div
        style={{
          justifyContent: "space-between",
          backgroundColor: "#1A1A1A",
          color: "white",
          paddingTop: 20,
          paddingBottom: 20
        }}
      >
        <Row>
          <Col xs="8">
            <div>{mainPhoto}</div>
          </Col>
          <Col xs="3">
            <div className="vertical-center">
              <Row>
                <h3> {name} </h3>
              </Row>
              <Row>{date}</Row>
              <Row>{position}</Row>
              <br />
              <Row>{tools}</Row>
              <br />
              <Row>
                <div
                  className="expand-button"
                  onClick={() => {
                    this.setState({ photoDisplay: !this.state.photoDisplay });
                  }}
                >
                  {" "}
                  Read More{" "}
                </div>
              </Row>
            </div>
          </Col>
        </Row>
        {this.state.photoDisplay ? (
          <div>
            <div
              style={{ marginRight: "20%", marginLeft: "20%", marginTop: 40 }}
            >
              {graph1}
              <br />
              <br />
              {graph2}
            </div>
            {graphics}
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}
export default ExperienceCard2;
