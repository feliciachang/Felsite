import React, { Component } from "react";
import { Row, Col } from "reactstrap";
class YFashionCard extends Component {
  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center", paddingTop: 50 }}>
          Ephemera Version 1
        </h3>
        <br />
        <p style={{ marginLeft: "20%", marginRight: "20%" }}>
          My first design was inspired by vintage aesthetics that is commonly
          assocaited with ephmera.
        </p>
        <br />
        <div className="image-container">
          <img src="https://felswebsite.s3.amazonaws.com/ephamerav1.jpg" />
        </div>
        <br />
        <br />
        <h3 style={{ textAlign: "center", paddingTop: 50 }}>
          Ephemera Version 2
        </h3>
        <br />
        <p style={{ marginLeft: "20%", marginRight: "20%" }}>
          In my second iteration, I tried to depict the idea of ephemera through
          the layout of the letters. By dispersing the letters of ephemera
          throughout the page, I wanted to communicate the way in which ephemera
          is often scattered and fleeting.
        </p>
        <br />
        <div className="image-container">
          <img src="https://felswebsite.s3.amazonaws.com/ephemerav2.png" />
        </div>
        <br />
        <br />
        <h3 style={{ textAlign: "center", paddingTop: 50 }}>
          Ephemera Version 3
        </h3>
        <br />
        <p style={{ marginLeft: "20%", marginRight: "20%" }}>
          My third and final version played with opacity as a way to depict
          ephemera. Bolder and easiest to read, it was readily picked up by the
          presidents of Y Fashion House. I created two versions, one that
          utilized more minimal colors and one that was brighter and zanier.
        </p>
        <br />
        <div style={{ marginLeft: "20%", marginRight: "20%" }}>
          <Row>
            <Col>
              <div className="image-container">
                <img src="https://felswebsite.s3.amazonaws.com/yfashcover.png" />
              </div>
            </Col>
            <Col>
              <div className="image-container">
                <img src="https://felswebsite.s3.amazonaws.com/empherav3_2.png" />
              </div>
            </Col>
          </Row>
        </div>
        <br />
        <br />
        <h3 style={{ textAlign: "center", paddingTop: 50 }}>
          Model Casting Event
        </h3>
        <br />
        <p style={{ marginLeft: "20%", marginRight: "20%" }}>
          This was a quick poster I made to promote the model casting event that
          was held for the Ephemera fashion show.
        </p>
        <br />
        <div className="image-container">
          <img src="https://felswebsite.s3.amazonaws.com/y+fashion+promo+poster.jpg" />
        </div>
        <br />
      </div>
    );
  }
}

export default YFashionCard;
