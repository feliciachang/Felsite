import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./thinkspaces-card.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import LazyLoad from "react-lazyload";
import BlogComponent from "../BlogComponent";
import HeaderComponent from "../HeaderComponent";

class ThinkspacesCard extends Component {
  render() {
    return (
      <div style={{marginBottom: "10%"}}>
        <HeaderComponent
          name="Thinkspaces."
          title="Cofounder | 2017-2019"
          des="Driven by the mission to make collaboration easier between people, Thinkspaces centralizes both student led endeavors like startups, passion projects, and research. In the Spring of 2018, we entered Yale’s Spring Accelerator and won the Audience Choice Award at the final pitchoff."
          color= "#FFFCDE"
          img="https://felswebsite.s3.amazonaws.com/thinkspacesbannergrayscale.png"
        />
        <BlogComponent
          number="01."
          title="A Minimum Viable Product"
          text="In October 2018, my team and I built a scrappy MVP using React. We had built a two-sided marketplace where students interested in joining a project could create a profile with their skills while students with projects would create a post open positions."
          image= {
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
          }
        />
        <BlogComponent
        number="02."
        title="Getting User Feedback"
        text=" After the release of our MVP, we conducted over 20 user interviewsfrom both project owners and project seekers. We quickly identified three core issues that we needed to address in our V2."
        image={
          <div style={{margin: "0 auto"}}>
          <img style={{objectFit: "contain", width: 500, display: "block", margin: "auto"}} src="https://felswebsite.s3.amazonaws.com/thinkspacesuserinterviewgrayscale.png"/>
          </div>}
        />
        <BlogComponent
        number="03."
        title="Prioritizing & Scheduling"
        text="While there were many ways in which we could implement our user feedback, we wanted to address issues that would provide maximum value. In terms of the user interface, this involved developing a filtering system, redesigning the project card and project page. Here's a picture of what our kanban board looked like:"
        image={
          <div style={{margin: "0 auto"}}>
          <img style={{objectFit: "contain", width: 500, display: "block", margin: "auto"}} src="https://felswebsite.s3.amazonaws.com/thinksapceskanban.png"/>
          </div>}
        />
        <BlogComponent
        number="04."
        title="Building a filtering system"
        text="From our user interviews, we found that users mainly considered projects under three categories, the discipline, the organization type, and its development stage. So, we did just that."
        image={
          <div style={{margin: "0 auto"}}>
          <img style={{objectFit: "contain", width: 500, display: "block", margin: "auto"}} src="https://felswebsite.s3.amazonaws.com/thinkspacesfilter.gif"/>
          </div>}
        />
        <BlogComponent
        number="05."
        title="Redesiging the Project Card"
        text="In designing the project card, my goal to give users a clear scope of the project without having to open to project. To do this, I deprioritized the project photo and added a section for open roles."
        image={
          <div style={{margin: "0 auto", color: "gray"}}>
                  <Row>
                  <Col>
                  <p style={{ textAlign: "center", paddingTop: 50 }}>New Card</p>
                    <img style={{objectFit: "contain", width: 200, display: "block", margin: "auto"}} src="https://felswebsite.s3.amazonaws.com/ThinkspacesCard+3.png" />
                  </Col>
                  <Col>
                  <p style={{ textAlign: "center", paddingTop: 50 }}>Original Card</p>
                    <img style={{objectFit: "contain", width: 200, display: "block", margin: "auto"}} src="https://felswebsite.s3.amazonaws.com/ThinkspacesCard+4.png" />
                  </Col>
                  </Row>
          </div>}
        />
        <BlogComponent
        number="06."
        title="Redesigning the Project Page"
        text="Similar to the project card, I wanted to deprioritize images (which we found was usually just a logo) and display more useful informtaion about the project. I also reorganized the project page into more modular components organized vertically."
        image={
          <div style={{margin: "0 auto"}}>
          <img style={{objectFit: "contain", width: 500, display: "block", margin: "auto"}} src="https://felswebsite.s3.amazonaws.com/thinkspacesproject2.gif"/>
          </div>}
        />
      </div>
    );
  }
}

export default ThinkspacesCard;
