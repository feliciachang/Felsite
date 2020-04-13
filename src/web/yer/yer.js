import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import LazyLoad from "react-lazyload";
import BlogComponent from "../BlogComponent";
import HeaderComponent from "../HeaderComponent";

class YERCard extends Component {
  render() {
    return (
      <div style={{marginBottom: "10%"}}>
        <HeaderComponent
          name="YER."
          title="Web Editor | 2020 - Now"
          des="The Yale Economic Review is a print and digital magazine on economic research by students at Yale. After being discontinued for two years, a team of economic students are are looking to revamp and restart the publication"
          color= "#FFFCDE"
          img="https://felswebsite.s3.amazonaws.com/yerbanner.png"
        />
        <BlogComponent
          number="01."
          title="Creating an identity"
          text="Before diving into the website design, I spent some time recreating a graphic identity that I could shape my overall thinking around. I wanted to find a way to blend modern sans serif with serif to communicate the idea of economics as a constantly evolving discipline. To do this, I created added tails to the classic Gill Sans typeface. "
          image= {
            <div style={{margin: "0 auto"}}>
            <img style={{objectFit: "contain", width: "100%", height: "auto", display: "block", margin: "auto"}} src="https://felswebsite.s3.amazonaws.com/yerlogos.png"/>
            </div>
          }
        />
        <BlogComponent
        number="02."
        title="Designing the Home Page"
        text="Following the logo design, I used bold black lines as the predominant gesture across the entire website. This came across most prominently in the vertical navbars. Fixed on both sides of the web page, users could scroll only the middle section, akin to most social feeds."
        image={
          <div style={{margin: "0 auto"}}>
          <img style={{objectFit: "contain", width: "100%", height: "auto", display: "block", margin: "auto"}} src="https://felswebsite.s3.amazonaws.com/yermockup.gif"/>
          </div>}
        />
        <BlogComponent
        number="03."
        title="Designing Article Display"
        text="While there were many ways in which we could implement our user feedback, we wanted to address issues that would provide maximum value. In terms of the user interface, this involved developing a filtering system, redesigning the project card and project page. Here's a picture of what our kanban board looked like:"
        image={
          <div style={{margin: "0 auto"}}>
          <img style={{objectFit: "contain", width: "100%", height: "auto",  display: "block", margin: "auto"}} src="https://felswebsite.s3.amazonaws.com/yerarticle.png"/>
          </div>}
        />
        <BlogComponent
        number="04."
        title="Configuring the CMS"
        text="From our user interviews, we found that users mainly considered projects under three categories, the discipline, the organization type, and its development stage. So, we did just that."
        image={
          <div style={{margin: "0 auto"}}>
          <img style={{objectFit: "contain", width: "80%", height: "auto", display: "block", margin: "auto"}} src="https://d21buns5ku92am.cloudfront.net/41748/images/347873-Mark_Circular_white_no%20shadow-3d0a86-medium-1582585736.png"/>
          </div>}
        />
      </div>
    );
  }
}

export default YERCard;
