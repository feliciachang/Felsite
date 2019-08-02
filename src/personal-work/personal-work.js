import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import ExperienceCard from "../components/experience-card";
import ExperienceCard2 from "../components/experience-card2";
import PlayCard from "./play/play.js";
import InternetCard from "./internet_child/internet_child.js";
import GraphicCard from "./graphicdesign/graphicdesign.js";

var bodyStyle = {
  margin: "80px"
};

class InternetChildPhoto extends Component {
  render() {
    return (
      <div className="image-container">
        <img src="https://felswebsite.s3.amazonaws.com/InternetChild_0853.JPG" />
      </div>
    );
  }
}

class PlayPhoto extends Component {
  render() {
    return (
      <div className="image-container">
        <img src="https://felswebsite.s3.amazonaws.com/play1.JPG" />
      </div>
    );
  }
}

class IntroGraphic extends Component {
  render() {
    return (
      <div className="image-container">
        <img src="https://felswebsite.s3.amazonaws.com/intrographic/unnamed.jpg" />
      </div>
    );
  }
}

// https://felswebsite.s3.amazonaws.com/intrographic/unnamed.jpg
//<a href="https://thinkspaces.org/"> thinkspaces.org/ </a>
class PersonalWork extends Component {
  render() {
    return (
      <div>
        <div style={{ margin: 40 }}>
          <h1 style={{ color: "#ff6e6e", fontWeight: "bold" }}>
            {" "}
            {"// Personal Work"}
          </h1>
          <br />
          <ExperienceCard2
            name="Internet Child"
            date="2019-now"
            tools="Java - Processing"
            graph1="Conversations with my computer."
            mainPhoto={<InternetChildPhoto />}
            graphics={<InternetCard />}
          />
          <br />
          <ExperienceCard2
            name="pLaY"
            date="2019-now"
            tools="Adobe Draw"
            graph1="An exercise on preserving the essence of play, something that I believe disapates as we move into adulthood."
            mainPhoto={<PlayPhoto />}
            graphics={<PlayCard />}
          />
          <br />
          <ExperienceCard2
            name="Graphic Design - Yale"
            date="2018"
            tools="Adobe Suite"
            graph1="A collection of projects from graphic design courses at Yale."
            mainPhoto={<IntroGraphic />}
            graphics={<GraphicCard />}
          />
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default PersonalWork;
