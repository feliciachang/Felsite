import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import ExperienceCard from "../components/experience-card";
import ExperienceCard2 from "../components/experience-card2";

var bodyStyle = {
  margin: "80px"
};

class PlayPhoto extends Component {
  render() {
    return (
      <div className="image-container">
        <img src={require("../assets/play1.JPG")} />
      </div>
    );
  }
}

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
            name="pLaY"
            date="2019-now"
            graph1=""
            mainPhoto={<PlayPhoto />}
          />
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default PersonalWork;
