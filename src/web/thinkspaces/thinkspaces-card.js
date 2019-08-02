import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./thinkspaces-card.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import LazyLoad from "react-lazyload";

// <div
//   style={{
//     marginTop: "5%",
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center"
//   }}
// >
//   <div>
//     <div style={{ textAlign: "center" }}>Project Page</div>
//     <div className="image-container">
//       <LazyLoad>
//         <img src="https://felswebsite.s3.amazonaws.com/Web+1920+%E2%80%93+1.png" />
//       </LazyLoad>
//     </div>
//   </div>
//   <div>
//     <div style={{ textAlign: "center" }}>Home</div>
//     <div className="image-container">
//       <LazyLoad>
//         <img src="https://felswebsite.s3.amazonaws.com/Web+1920+%E2%80%93+22.png" />
//       </LazyLoad>
//     </div>
//   </div>
//   <div>
//     <div style={{ textAlign: "center" }}>Explore</div>
//     <div className="image-container">
//       <LazyLoad>
//         <img src="https://felswebsite.s3.amazonaws.com/Web+1920+%E2%80%93+4.png" />
//       </LazyLoad>
//     </div>
//   </div>
// </div>

class ThinkspacesCard extends Component {
  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center", paddingTop: 50 }}>
          A Minimum Viable Product
        </h3>
        <br />
        <p style={{ marginLeft: "20%", marginRight: "20%" }}>
          In October 2018, my team and I built a scrappy MVP using React.
          Initially, we had no backend and had users submit projects using a
          Google Form. After receiving some signs of success, we built out the
          backend framework using Google Firebase and built out our sign up
          flow. In months, we received over 40 projects and nearly 200 users.
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
              <img src="https://felswebsite.s3.amazonaws.com/TMVP+%E2%80%93+1.png" />
            </div>
            <div>
              <img src="https://felswebsite.s3.amazonaws.com/TMVP+%E2%80%93+2.png" />
            </div>
            <div>
              <img src="https://felswebsite.s3.amazonaws.com/TMVP+%E2%80%93+3.png" />
            </div>
            <div>
              <img src="https://felswebsite.s3.amazonaws.com/TMVP+%E2%80%93+4.png" />
            </div>
          </Carousel>
        </div>
        <br />
        <br />
        <h3 style={{ textAlign: "center", paddingTop: 50 }}>
          User Feedback and Interviews
        </h3>
        <br />
        <p style={{ marginLeft: "20%", marginRight: "20%" }}>
          After the release of our MVP, we conducted over 20 user interviews
          from both project owners and project seekers. We quickly identified
          three core issues that we needed to address in our V2.
        </p>
        <br />
        <p style={{ marginLeft: "20%", marginRight: "20%" }}>
          1. Project Submission is much stronger than user profiles. A two-sided
          marketplace is not necessary.
        </p>
        <p style={{ marginLeft: "20%", marginRight: "20%" }}>
          2. Easier Project Filtering. While we liked the fact that an infinite
          scroll encouraged project exploration, users wanted to be able to find
          projects they were most likely to be interested in quickly.
        </p>
        <p style={{ marginLeft: "20%", marginRight: "20%" }}>
          2. Quality Control. Because we hosted a diversity of projects, from
          early stage to released, we needed to build UI that would help
          maintain the quality of of website.
        </p>
        <br />
        <br />
        <h3 style={{ textAlign: "center", paddingTop: 50 }}>Version 2</h3>
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
              <img src="https://felswebsite.s3.amazonaws.com/TV2+%E2%80%93+22+2.png" />
            </div>
            <div>
              <img src="https://felswebsite.s3.amazonaws.com/TV2+%E2%80%93+4+2.png" />
            </div>
            <div>
              <img src="https://felswebsite.s3.amazonaws.com/TV2+%E2%80%93+1+2.png" />
            </div>
          </Carousel>
        </div>
        <br />
        <br />
        <h3 style={{ textAlign: "center", paddingTop: 50 }}>Logo Brainstorm</h3>
        <p style={{ marginLeft: "20%", marginRight: "20%" }}>
          My main objective with the Thinkspaces logo was to communicate
          Thinkspaces' devotion to creativity. To do so, I wanted to build an
          identity that was bright and spunky. I experimented with many
          different symbols and colors, as seen below:
        </p>
        <div className="image-container">
          <LazyLoad>
            <img src="https://felswebsite.s3.amazonaws.com/thinkspaceslogoideas2.png" />
          </LazyLoad>
        </div>
        <br />
        <p style={{ marginLeft: "20%", marginRight: "20%" }}>
          We concluded with the logo below as it seemed to capture most
          accurately the spontaneity of a great idea. It was bright, fun, and
          not too corporate.
        </p>
        <div className="circlelogo-container">
          <LazyLoad>
            <img src="https://felswebsite.s3.amazonaws.com/thinkspacescircle.png" />
          </LazyLoad>
        </div>
        <div className="logo-container">
          <LazyLoad>
            <img src="https://felswebsite.s3.amazonaws.com/thinkspaceslogowhite.png" />
          </LazyLoad>
        </div>
        <div className="poster-container">
          <LazyLoad>
            <img src="https://felswebsite.s3.amazonaws.com/thinkspacesposter.png" />
          </LazyLoad>
        </div>
      </div>
    );
  }
}

export default ThinkspacesCard;
