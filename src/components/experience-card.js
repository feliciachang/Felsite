import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import "./experience-card.css";

class ExperienceCard extends Component {
  state = {
    photoDisplay: false
  };

  // toggle = () => {
  //   this.setState({ photoDisplay: !this.state.photoDisplay });
  // };
  //
  // photoDisplayer() {
  //   if (this.state.photoDisplay) {
  //     return (
  //       <div>
  //         <img
  //           src="https://felswebsite.s3.amazonaws.com/ThinkspacesHome.png"
  //           width="100%"
  //           height="200"
  //         />
  //       </div>
  //     );
  //   }
  // }

  render() {
    const {
      name,
      date,
      position,
      tools,
      graph1,
      graph2,
      graph3,
      graphics
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
          <Col xs="4">
            <div style={{ paddingLeft: 70 }}>
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
          <Col xs="7">
            <Row>{graph1}</Row>
            <br />
            <Row>{graph2}</Row>
            <br />
            <Row>{graph3}</Row>
          </Col>
        </Row>
        {this.state.photoDisplay ? <div>{graphics}</div> : <div />}
      </div>
    );
  }
}
export default ExperienceCard;
