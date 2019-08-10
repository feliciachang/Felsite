import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./samsara-card.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import LazyLoad from "react-lazyload";

class SamsaraCard extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            marginRight: "20%",
            marginLeft: "20%"
          }}
        >
          <h3 style={{ textAlign: "center", paddingTop: 50 }}> Web Design </h3>
          <br />
          <p>
            With our website, we wanted to communicate the history and luxury of traditional Indian perfume.
            I accomplished this through small yet significant design decisions like framing our image assets with a beige border to lend a vintage feel,
            choosing an elegant serif font, and developing a color pallette that was rich, yet subdued in earth tones.
          </p>
          <br />
          <Carousel
            useKeyboardArrows={true}
            showIndicators={false}
            showStatus={false}
            showArrows={false}
          >
            <div>
              <img src="https://felswebsite.s3.amazonaws.com/samsaraweb+%E2%80%93+1.png" />
            </div>
            <div>
              <img src="https://felswebsite.s3.amazonaws.com/samsaraweb+%E2%80%93+2.png" />
            </div>
            <div>
              <img src="https://felswebsite.s3.amazonaws.com/samsaraweb+%E2%80%93+3.png" />
            </div>
          </Carousel>
          <br />
          <br />
          <h3 style={{ textAlign: "center", paddingTop: 50 }}>
            {" "}
            Logo Design Process
          </h3>
          <br />
          <p>
            We had a team-wide design sprint where everyone contributed ideas
            for how they envisioned Samsara to look like. This was the result:
          </p>
          <div className="poster-container">
            <img src="https://felswebsite.s3.amazonaws.com/samsarasketch.png" />
          </div>
          <br />
          <br />
          <p>I then translated those sketches into prospective logos:</p>
          <div className="poster-container">
            <img src="https://felswebsite.s3.amazonaws.com/samsaratrials.png" />
          </div>
          <br />
          <br />
          <p>Which led to our final logo:</p>
          <div className="logo-container">
            <img src="https://felswebsite.s3.amazonaws.com/samsarablack.png" />
          </div>
          <br />
          <h3 style={{ textAlign: "center", paddingTop: 50 }}>
            {" "}
            Product Design
          </h3>
          <br />
          <p>
            Following the framed theme from the web page, I used image assets of our
            ingredients to serve as the frame around the perfume.
          </p>
          <div
            style={{
              marginRight: "20%",
              marginLeft: "20%"
            }}
          >
            <Carousel
              useKeyboardArrows={true}
              showIndicators={false}
              showStatus={false}
              showArrows={false}
            >
              <div>
                <img src="https://felswebsite.s3.amazonaws.com/samsaraproduct5.JPG" />
              </div>
              <div>
                <img src="https://felswebsite.s3.amazonaws.com/samsaraproduct4.JPG" />
              </div>
              <div>
                <img src="https://felswebsite.s3.amazonaws.com/samsaraproduct3.JPG" />
              </div>
            </Carousel>
          </div>
        </div>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        />
      </div>
    );
  }
}

export default SamsaraCard;
