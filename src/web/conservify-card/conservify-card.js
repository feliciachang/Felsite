import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./conservify-card.css";

class ConservifyCard extends Component {
  render() {
    return (
      <div>
        <div className="conservify-container">
          <img src={require("../../assets/Fieldkit.png")} />
        </div>
      </div>
    );
  }
}

export default ConservifyCard;
