import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./thinkspaces-card.css";
import LazyLoad from "react-lazyload";

class ThinkspacesCard extends Component {
  render() {
    return (
      <div>
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
        <div
          style={{
            marginTop: "5%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div>
            <div style={{ textAlign: "center" }}>Home</div>
            <div className="image-container">
              <LazyLoad>
                <img src="https://felswebsite.s3.amazonaws.com/Web+1920+%E2%80%93+1.png" />
              </LazyLoad>
            </div>
          </div>
          <div>
            <div style={{ textAlign: "center" }}>Explore</div>
            <div className="image-container">
              <LazyLoad>
                <img src="https://felswebsite.s3.amazonaws.com/Web+1920+%E2%80%93+22.png" />
              </LazyLoad>
            </div>
          </div>
          <div>
            <div style={{ textAlign: "center" }}>Project Page</div>
            <div className="image-container">
              <LazyLoad>
                <img src="https://felswebsite.s3.amazonaws.com/Web+1920+%E2%80%93+4.png" />
              </LazyLoad>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ThinkspacesCard;
