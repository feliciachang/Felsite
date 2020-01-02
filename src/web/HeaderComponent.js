import React, { Component, useState } from "react";
import { Row, Col } from "reactstrap";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HeaderComponent = ({name, title, des, img, color}) => {

  return(
    <div>
      <div style={{marginLeft: "10%", marginRight: "5%"}}>
        <div style={{paddingTop: "2%", paddingBottom: "5%"}}>
          <Row>
          <Col xs= "auto" sm="auto" md="auto" lg="4" xl="4">
          <div>
          <h1 >{name}</h1>
          <p>{title}</p>
          </div>
          </Col>
          <Col>
          <div style = {{color: "gray"}}>
          <p>{des}</p>
          </div>
          </Col>
          </Row>
        </div>
      </div>
      <div >
        <img style ={{objectFit: "contain", height: "70%" }} className="cover-photo" src={img} />
      </div>
    </div>
  )
}

export default HeaderComponent
