import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./conservify-card.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class ConservifyCard extends Component {
  render() {
    return (
      <div>
      <div style={{margin: "2%"}}>
      <div >
        <Row>
        <Col xs="4">
          <img style={{height: "100px"}}src="https://pbs.twimg.com/profile_images/582575092472774656/AVKatWP-_400x400.jpg"/>
        </Col>
        </Row>
      </div>
      <div style={{paddingTop: "2%"}}>
        <Row>
        <Col xs="4">
        <div>
        <h1 >Conservify.</h1>
        <p/>
        <p>2017-2019</p>
        <p>UX Engineer Intern</p>
        </div>
        </Col>
        <Col>
        <div>
        <p>Conservify is a nonprofit startup that develops open-source sensor and communication modules with a compatible mobile app and website, used for conservation research by multiple groups including National Geographic. </p>
        <p>While building the frontend functionality of the mobile app, I took the initiative to propose a complete redesign and infrastracture changes for more intuitive navigation.</p>
        </div>
        </Col>
        </Row>
      </div>
      <hr/>
      <h3 style={{ textAlign: "center", marginTop: "10%" }}>The Problem with the Original UI/UX</h3>
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
          <br/>
        <div
          style={{
            marginRight: "20%",
            marginLeft: "20%",
          }}
        >
        <video style={{width:"100%"}}controls src="https://felswebsite.s3.amazonaws.com/Fieldkit.webm" type="video/webm">
            <p>Your browser does not support the video element.</p>
        </video>
        </div>
      </div>
      </div>
    );
  }
}

export default ConservifyCard;
