import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./thinkspaces-card.css";
import LazyLoad from "react-lazyload";

class ThinkspacesCard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
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
            </div>
          </Col>
          <Col>
            <div className="poster-container">
              <LazyLoad>
                <img src="https://felswebsite.s3.amazonaws.com/thinkspacesposter.png" />
              </LazyLoad>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ThinkspacesCard;
