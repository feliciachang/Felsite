import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./conservify-card.css";

class ConservifyCard extends Component {
  render() {
    return (
      <div>
        <div className="conservify-container">
          <img src="https://felswebsite.s3.amazonaws.com/fieldkit3.png" />
        </div>
      </div>
    );
  }
}

export default ConservifyCard;
