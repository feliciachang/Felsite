import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import ExperienceCard from "../components/experience-card";
import ThinkspacesCard from "./thinkspaces-card/thinkspaces-card";
import ConservifyCard from "./conservify-card/conservify-card";
import SamsaraCard from "./samsara-card/samsara-card";
import WeiboCard from "./weibo-card/weibo-card";
import YFashionCard from "./yfashion-card/yfashion-card";
import ExperienceCard2 from "../components/experience-card2";
import "./web.css";

var bodyStyle = {
  margin: "80px"
};

class ThinkspacesPhoto extends Component {
  render() {
    return (
      <div className="image-container">
        <img src="https://felswebsite.s3.amazonaws.com/ThinkspacesHome.png" />
      </div>
    );
  }
}

class ConservifyPhoto extends Component {
  render() {
    return (
      <div className="field-container">
        <img src={require("../assets/Fieldkit.png")} />
      </div>
    );
  }
}

class SamsaraPhoto extends Component {
  render() {
    return (
      <div className="sam-container">
        <img src={require("../assets/sam.png")} />
      </div>
    );
  }
}
class YFashionPhoto extends Component {
  render() {
    return (
      <div className="image-container">
        <img src={require("../assets/Untitled-9.png")} />
      </div>
    );
  }
}

class WeiboPhoto extends Component {
  render() {
    return (
      <div className="image-container">
        <img src={require("../assets/weibobanner.png")} />
      </div>
    );
  }
}

//<a href="https://thinkspaces.org/"> thinkspaces.org/ </a>
class Web extends Component {
  render() {
    return (
      <div>
        <div style={{ margin: 40 }}>
          <h1 style={{ color: "#ff6e6e", fontWeight: "bold" }}>
            {" "}
            {"// Experience"}
          </h1>
          <br />
          <Row>
            <Col>
              <div className="box">
                <Row>
                  <Col>
                    <h3> {"Engineering"}</h3>
                  </Col>
                </Row>
                <Row>
                  <Col>Javascript</Col>
                  <Col>Experienced</Col>
                </Row>
                <Row>
                  <Col>HTML\CSS</Col>
                  <Col>Experienced</Col>
                </Row>
                <Row>
                  <Col>Java</Col>
                  <Col>Proficient</Col>
                </Row>
                <Row>
                  <Col>C</Col>
                  <Col>Proficient</Col>
                </Row>
              </div>
            </Col>
            <Col>
              <div className="box">
                <Row>
                  <Col>
                    <h3> {"Frameworks"}</h3>
                  </Col>
                </Row>
                <Row>
                  <Col>React</Col>
                  <Col>Experienced</Col>
                </Row>
                <Row>
                  <Col>React Native</Col>
                  <Col>Experienced</Col>
                </Row>
                <Row>
                  <Col>Processing</Col>
                  <Col>Learning</Col>
                </Row>
              </div>
            </Col>
            <Col>
              <div className="box">
                <Row>
                  <Col>
                    <h3> {"Tools"}</h3>
                  </Col>
                </Row>
                <Row>
                  <Col>Firebase </Col>
                  <Col>Experienced</Col>
                </Row>
                <Row>
                  <Col>Google Analytics </Col>
                  <Col>Experienced</Col>
                </Row>
              </div>
            </Col>
          </Row>

          <br />
          <ExperienceCard2
            name="Thinkspaces"
            date="2017-now"
            position="Cofounder"
            tools="ReactJS, Firebase, Google Analytics, AdobeXD"
            graph1="Thinkspaces is a web platform that connects students to opportunities on university campuses. Driven by the mission to make collaboration easier between people, Thinkspaces centralizes both student led endeavors like startups, passion projects, and research along with paid on-campus jobs. We released our minimum viable product in October 2018 and our second prototype in January 2019. We now host more than 40 projects and 300+ monthly users. We entered Yale’s Spring Accelerator and won the Audience Choice Award at the final pitchoff."
            graph2="As a cofounder with both technical and design experience, I was involved with the product development process from ideation to execution. I worked on fullstack development, coding interface wireframes and features with ReactJS and a Google Firebase backend. Our working prototype gave users the ability to authenticate, build profiles, post projects, and support other projects with likes. We are currently building our third version that will support custom-built filtering and search features and micro-services using Google Cloud Functions."
            graph3=""
            mainPhoto={<ThinkspacesPhoto />}
            graphics={<ThinkspacesCard />}
          />
          <br />
          <ExperienceCard2
            name="Conservify"
            date="2018-now"
            position="Frontend Software Engineer Intern"
            tools="React Native, Redux, Jest, Enzyme, Mapbox API, AdobeXD"
            graph1="Conservify is a nonprofit startup that develops open-source sensor and communication modules with a compatible mobile app and website, used for conservation research by multiple groups including National Geographic. "
            graph2="At Conservify, I contributed to the FieldKit mobile app, which allows users to interface with their FieldKit device, a sensor module composed of many different environmental sensors. Given my background in design, I was able to design prototypes in Adobe XD and build the frontend functionality. For UX, I pitched changes to navigation, building a custom tab navigation component. Prior to the change, users were only able to direct themselves from a button menu. I also participated in meetings on user experience to help develop user personas, build user journeys, and plan features. "
            graph3="Outside of making functionality changes,I also built new features and corresponding automated tests with Jest and Enzyme. One feature gave users greater customizability over their FieldKit devices by allowing them to change the name of their device through their phone, using Async Storage and an API call to the FieldKit device. Another feature let users visualize their data on a map, using the MapBox API."
            mainPhoto={<ConservifyPhoto />}
            graphics={<ConservifyCard />}
          />
          <br />
          <ExperienceCard2
            name="Samsara"
            date="2019-now"
            tools="Photoshop, Lightroom, Illustrator"
            position="Branding Lead"
            graph1="Samsara is a working project created by myself and three Google engineers and PM's. We are working to bring traditional Indian perfume called Attar to the American market. Targeting the luxury perfume market, Samsara focuses on delivering perfume made with pure ingredients and essential oils."
            graph2="In a series of design sprints, we developed the Samsara logo and mood board that then informed our website and product design. Our objective in branding was to bridge the all-natural ingredients of the perfume to the historicism of attar."
            mainPhoto={<SamsaraPhoto />}
            graphics={<SamsaraCard />}
          />
          <br />
          <ExperienceCard2
            name="Weibo"
            date="2018-now"
            position="UI Design Intern"
            tools="Sketch"
            graph1=""
            mainPhoto={<WeiboPhoto />}
            graphics={<WeiboCard />}
          />
          <br />
          <ExperienceCard2
            name="Y Fashion House"
            date="2017-2018"
            position="Graphic Designer"
            tools=""
            graph1=""
            mainPhoto={<YFashionPhoto />}
            graphics={<YFashionCard />}
          />
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default Web;
