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
        <img src="https://felswebsite.s3.amazonaws.com/fieldkit3.png" />
      </div>
    );
  }
}

class SamsaraPhoto extends Component {
  render() {
    return (
      <div className="sam-container">
        <img src="https://felswebsite.s3.amazonaws.com/samsaracentered.png" />
      </div>
    );
  }
}
class YFashionPhoto extends Component {
  render() {
    return (
      <div className="image-container">
        <img src="https://felswebsite.s3.amazonaws.com/yfashcover.png" />
      </div>
    );
  }
}

class WeiboPhoto extends Component {
  render() {
    return (
      <div className="image-container">
        <img src="https://felswebsite.s3.amazonaws.com/weibo.png" />
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
          <ExperienceCard2
            name="Thinkspaces"
            date="2017-now"
            position="Cofounder"
            tools="ReactJS, Firebase, Google Analytics, AdobeXD"
            graph1="Thinkspaces is a web platform that connects students to opportunities on university campuses. Driven by the mission to make collaboration easier between people, Thinkspaces centralizes both student led endeavors like startups, passion projects, and research along with paid on-campus jobs. We released our minimum viable product in October 2018 and our second prototype in January 2019, hosting more than 40 projects and 300+ monthly users. In the Spring of 2018, we entered Yale’s Spring Accelerator and won the Audience Choice Award at the final pitchoff."
            graph2="As a cofounder with both technical and design experience, I was involved with the product development process from ideation to execution. I worked on fullstack development, coding interface wireframes and features with ReactJS and a Google Firebase backend. Our working prototype gave users the ability to authenticate, build profiles, post projects, and support other projects with likes. We are currently building our third version that will support custom-built filtering and search features and micro-services using Google Cloud Functions."
            graph3=""
            mainPhoto={<ThinkspacesPhoto />}
            graphics={<ThinkspacesCard />}
          />
          <br />
          <ExperienceCard2
            name="Conservify"
            date="2018-now"
            position="Software Engineer Intern"
            tools="React Native, Redux, Jest, Enzyme, Mapbox API, AdobeXD"
            graph1="Conservify is a nonprofit startup that develops open-source sensor and communication modules with a compatible mobile app and website, used for conservation research by multiple groups including National Geographic. "
            graph2="At Conservify, I contributed to the FieldKit mobile app, which allows users to interface with their FieldKit device, a sensor module composed of many different environmental sensors. Given my background in design, I was able to design prototypes in Adobe XD and build the frontend functionality. For UX, I pitched a redesign of the central app navigation, building a custom tab navigation component. I also participated in meetings on user experience to help develop user personas, build user journeys, and plan features. "
            graph3="Outside of making functionality changes, I also built new features and corresponding automated tests with Jest and Enzyme. One feature gave users greater customizability over their FieldKit devices by allowing them to change the name of their device through their phone, using Async Storage and an API call to the FieldKit device. Another feature let users visualize their data on a map, using the MapBox API."
            mainPhoto={<ConservifyPhoto />}
            graphics={<ConservifyCard />}
          />
          <br />
          <ExperienceCard2
            name="Samsara"
            date="2019-now"
            tools="Photoshop, Lightroom, Illustrator"
            position="Branding Lead"
            graph1="Samsara is a working project created by myself and three Yale graduates. We are working to bring traditional Indian perfume called Attar to the American market. A luxury perfume, Samsara focuses on delivering perfume made with pure ingredients and essential oils."
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
            graph1="Weibo, a microblogging app, is one of the largest social media companies in China with more than 400 million monthly active users. Weibo combines functionalities from many of the social media platforms in the United States and China, with payment capabilities, blogging, and stories."
            graph2="At Weibo, I worked in cross functional teams across product, UX, and software development for a variety of projects. I began with designing icons for Weibo’s main app and later designed entire iPhone interfaces for a new in-app game called Panda Keeper."
            graph3="In addition to designing content, I also conducted product analysis of Weibo’s competitors. My study focused on comparing how social media and news apps in China displayed information through different card designs."
            mainPhoto={<WeiboPhoto />}
            graphics={<WeiboCard />}
          />
          <br />
          <ExperienceCard2
            name="Y Fashion House"
            date="2017-2018"
            position="Graphic Designer + Photographer"
            tools="Illustrator"
            graph1="Y Fashion House is a club at Yale that holds a biannual fashion show, showcasing designers across greater New York area.The 2018 winter show was called Ephemera."
            graph2="I produced much of the marketing content used to promote the fashion show and model casting event. Working with multiple photographers, we conducted two independent photoshoots. I then used our photographs to design templates that were applied to the portraits of each model."
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
