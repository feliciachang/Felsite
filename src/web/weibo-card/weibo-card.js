import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
class WeiboCard extends Component {
  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center", paddingTop: 50 }}>
          Project 1: Card Design Competitive Analysis
        </h3>
        <br />
        <p style={{ marginLeft: "20%", marginRight: "20%" }}>
          I compiled a library of news feed card designs from five of Weibo's
          competitors to help inform Weibo's card design decisions. An exerpt of the study may be viewed in the
          slideshow below.
        </p>
        <br />
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
              <img src="https://felswebsite.s3.amazonaws.com/WeiboCardStudy+%E2%80%93+1.png" />
            </div>
            <div>
              <img src="https://felswebsite.s3.amazonaws.com/WeiboCardStudy+%E2%80%93+2.png" />
            </div>
            <div>
              <img src="https://felswebsite.s3.amazonaws.com/WeiboCardStudy+%E2%80%93+4.png" />
            </div>
            <div>
              <img src="https://felswebsite.s3.amazonaws.com/WeiboCardStudy+%E2%80%93+5.png" />
            </div>
          </Carousel>
          <br />
          <br />
          <h3 style={{ textAlign: "center", paddingTop: 50 }}>
            Project 2: Panda Keeper Minigame
          </h3>
          <br />
          <p>
            Panda Keeper is an environmental awareness in-app minigame.
            Our goal with the minigame was to educate users of the environment through postcards that
            that depicted different types of bamboo species the user's panda came across in its travels.
            Thus, our postcards needed to be engaging for users to scroll through and read.
          </p>
          <br />
          <div className="image-container3">
            <img src="https://felswebsite.s3.amazonaws.com/PandaKeeperCards+%E2%80%93+1.png" />
          </div>
          <br />
          <br />
          <h3 style={{ textAlign: "center", paddingTop: 50 }}>
            Project 3: Super Hashtag Icon Design
          </h3>
          <br />
          <p>
            Super Hashtag was a new app for trending topics from the Weibo app.
            When designing the icon, I was thinking about how to best depict virality while staying close to the Weibo logo and color palette.
          </p>
          <br />
          <div className="image-container3">
            <img src="https://felswebsite.s3.amazonaws.com/Web+1920+%E2%80%93+1.png" />
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default WeiboCard;
