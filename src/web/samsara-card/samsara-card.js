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
            With our website, we wanted to showcase the history of traditional
            Indian perfume. To built a UI that complemented the themes of
            historicism and luxury, I opted for two simple serif and sans serif
            fonts. I kept the site structure as minimal as possible, but created
            beige frames around each photo to provide a vintage feel.
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
            <img src="https://felswebsite.s3.amazonaws.com/samsaracentered.png" />
          </div>
          <br />
          <h3 style={{ textAlign: "center", paddingTop: 50 }}>
            {" "}
            Product Design
          </h3>
          <br />
          <p>
            Following the famed theme from the web page, I built our product
            catalog in the same manner. I used
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
