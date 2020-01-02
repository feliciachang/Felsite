import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import LazyLoad from "react-lazyload";

const BlogComponent = ({number, title, text, image}) => {
    return (
      <div style={{marginLeft: "10%", marginRight: "5%", marginTop: "10%"}}>
        <Row>
        <Col xs= "auto" sm="auto" md="4" lg="4" xl="4">
        <div style = {{color: "gray"}}>
        <p >{number}</p>
        </div>
        <h3 style={{ paddingBottom: "10%"}}>{title}</h3>
        <div style = {{color: "gray"}}>
        <p >{text}</p>
        </div>
        </Col>
        <Col>
        <div>
        <LazyLoad offset={100}>
          {image}
        </LazyLoad>
        </div>
        </Col>
        </Row>
      </div>
    );
}

export default BlogComponent;
