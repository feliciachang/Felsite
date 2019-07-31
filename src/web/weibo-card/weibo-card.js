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
          competitors to help inform Weibo's card design decisions. The project
          required immense attention to detail as I had to measure exact pixel
          dimensions and ratios. An exerpt of the study may be viewed in the
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
            Panda Keeper is an environmental awareness in-app minigame in which
            your panda goes on adventures and collects different types of bamboo
            species. While the panda travels, it also brings back postcards.
            Pictured below are UI designs of the bamboo and postcard screens.
            Designing the Panda Keeper UI was an incredibly enjoyale exxperience
            becuase it was my first foray into UI designs that were intensely
            illustration focused.
          </p>
          <br />
          <div className="image-container">
            <img src="https://felswebsite.s3.amazonaws.com/PandaKeeperCards+%E2%80%93+1.png" />
          </div>
          <br />
          <br />
          <h3 style={{ textAlign: "center", paddingTop: 50 }}>
            Project 3: Super Hashtag Icon Design
          </h3>
          <br />
          <p>
            Super Hashtag was a new app specially for trending topics on the
            Weibo news section. I was tasked with designing Super Hashtag's app
            icon. Originally, I iterated upon literal depictions of hashtags.
            Then, stepping into a more abstract space, I tried to depict the
            idea of virality while playing on the Weibo logo. The latter idea
            gained attraction from senior UI designers and was one of the final
            candidates to be considered.
          </p>
          <br />
          <div className="image-container">
            <img src="https://felswebsite.s3.amazonaws.com/Web+1920+%E2%80%93+1.png" />
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default WeiboCard;
