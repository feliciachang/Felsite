import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./conservify-card.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class ConservifyCard extends Component {
  render() {
    return (
      <div>
      <br/>
      <h3 style={{ textAlign: "center" }}>The Problem with the Original UI/UX</h3>
      <p style={{ marginLeft: "20%", marginRight: "20%" }}>
      Rather than having a navigation bar, the app only had a button called "Advanced Options" that then took the user to a row of buttons. This was extremely inefficient and led the developer to pile all functionality into "Easy Transfer." As a result, the app had no modularity and gave users a confusing experience.
      </p>
      <div className="conservify2-container">
        <img src="https://felswebsite.s3.amazonaws.com/OriginalFieldkit.png" />
      </div>
      <br/>
        <h3 style={{ textAlign: "center", paddingTop: 50 }}>
          Initial Sketches
        </h3>
        <p style={{ marginLeft: "20%", marginRight: "20%" }}>
        Before jumping into aesthetic changes, I sketched possible user flows would allow for a logical separation of information in each screen. The app was split into four sections:
          </p>
          <p style={{ marginLeft: "20%", marginRight: "20%" }}>
          1. Connect and download data from the FieldKit device
          </p>
          <p style={{ marginLeft: "20%", marginRight: "20%" }}>
          2. Upload data from the phone to the FieldKit website.
          </p>
          <p style={{ marginLeft: "20%", marginRight: "20%" }}>
          3. Browse data logs on your phone
          </p>
          <p style={{ marginLeft: "20%", marginRight: "20%" }}>
          4. Learn more about FieldKit
          </p>
        <div
          style={{
            marginRight: "30%",
            marginLeft: "30%"
          }}
        >
          <Carousel
            useKeyboardArrows={true}
            showIndicators={false}
            showStatus={false}
            showArrows={false}
          >
            <div>
              <img src="https://felswebsite.s3.amazonaws.com/IMG_0791.jpg" />
            </div>
            <div>
              <img src="https://felswebsite.s3.amazonaws.com/IMG_0797.jpg" />
            </div>
          </Carousel>
        </div>
        <br/>
        <h3 style={{ textAlign: "center" }}>First UI Iterations</h3>
        <p style={{ marginLeft: "20%", marginRight: "20%" }}>
        I played around with different types of playful colors that promoted a positive feelings of excitement and exploration.
        </p>
        <div className="conservify2-container">
          <img src="https://felswebsite.s3.amazonaws.com/oldfieldkit2.png" />
        </div>
        <br/>
        <h3 style={{ textAlign: "center", paddingTop: 30 }}>Final UI/UX</h3>
        <p style={{ marginLeft: "20%", marginRight: "20%" }}>
        But after discussions with the founder, we decided that a more minimal and simple color palatte gave a more professional feel that aligned with the Conservify brand.
        The final version also evolved into four different app screens to provide further modularity.  </p>
          <p style={{ marginLeft: "20%", marginRight: "20%" }}>
          1. Connect and download data from the FieldKit device
          </p>
          <p style={{ marginLeft: "20%", marginRight: "20%" }}>
          2. Upload data from the phone to the FieldKit website.
          </p>
          <p style={{ marginLeft: "20%", marginRight: "20%" }}>
          3. Browse data logs on your phone
          </p>
          <p style={{ marginLeft: "20%", marginRight: "20%" }}>
          4. Learn more about FieldKit
          </p>
        <div style={{ marginLeft: "20%", marginRight: "20%" }}>
          <Row>
          <Col>
          <div className = "circlelogo-container">
          <img src="https://felswebsite.s3.amazonaws.com/FieldkitConnect.png" />
          </div>
          </Col>
          <Col>
          <div className = "circlelogo-container">
          <img src="https://felswebsite.s3.amazonaws.com/FieldkitUpload.png" />
          </div>
          </Col>
          </Row>
<br/>
          <Row>

          <Col>
          <div className = "circlelogo-container">
          <img src="https://felswebsite.s3.amazonaws.com/FieldkitBrowser.png" />
          </div>
          </Col>
            <Col>
            <div className = "circlelogo-container">
            <img src="https://felswebsite.s3.amazonaws.com/FieldkitAbout.png" />
            </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ConservifyCard;
