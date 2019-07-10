import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./conservify-card.css";

class ConservifyCard extends Component {
  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center", paddingTop: 50 }}>
          Initial Sketches
        </h3>
        <div style={{ justifyContent: "space between" }}>
          <div className="sketch-container">
            <img src="https://felswebsite.s3.amazonaws.com/IMG_0791.jpg" />
          </div>
          <div className="sketch-container">
            <img src="https://felswebsite.s3.amazonaws.com/IMG_0797.jpg" />
          </div>
        </div>
        <h3 style={{ textAlign: "center" }}>First UI Iterations</h3>
        <div className="conservify2-container">
          <img src="https://felswebsite.s3.amazonaws.com/oldfieldkit2.png" />
        </div>
        <h3 style={{ textAlign: "center", paddingTop: 30 }}>Final UI/UX</h3>
        <div className="conservify-container">
          <img src="https://felswebsite.s3.amazonaws.com/fieldkit3.png" />
        </div>
      </div>
    );
  }
}

export default ConservifyCard;
