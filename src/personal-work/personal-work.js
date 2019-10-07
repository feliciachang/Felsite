import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import ExperienceCard from "../components/experience-card";
import ExperienceCard2 from "../components/experience-card2";
import PlayCard from "./play/play.js";
import InternetCard from "./internet_child/internet_child.js";
import GraphicCard from "./graphicdesign/graphicdesign.js";
import WaterCard from "./water/water.js"
import LuxPage from "./luxetveritas/luxetveritas.js";

var bodyStyle = {
  margin: "80px"
};

class InternetChildPhoto extends Component {
  render() {
    if(this.props.mobile) {
      return (
        <div className="image-container2">
          <img src="https://felswebsite.s3.amazonaws.com/InternetChildStar.png" />
        </div>
      );
    }
    else {
      return (
        <div className="image-container">
          <img src="https://felswebsite.s3.amazonaws.com/InternetChildStar.png" />
        </div>
      );
    }
  }
}

class PlayPhoto extends Component {
  render() {
    if(this.props.mobile) {
      return (
        <div className="image-container2">
          <img src="https://felswebsite.s3.amazonaws.com/PlayStar.png" />
        </div>
      );
    }
    else {
      return (
        <div className="image-container">
          <img src="https://felswebsite.s3.amazonaws.com/PlayStar.png" />
        </div>
      );
    }
  }
}

class IntroGraphic extends Component {
  render() {
    if(this.props.mobile) {
      return (
        <div className="image-container2">
          <img src="https://felswebsite.s3.amazonaws.com/intrographic/unnamed.jpg" />
        </div>
      );
    }
    else {
      return (
        <div className="image-container">
          <img src="https://felswebsite.s3.amazonaws.com/intrographic/unnamed.jpg" />
        </div>
      );
    }
  }
}

class WaterGraphic extends Component {
  render() {
    if(this.props.mobile) {
      return (
        <div className="image-container2">
          <img src="https://felswebsite.s3.amazonaws.com/WaterStar.png" />
        </div>
      );
    }
    else {
      return (
        <div className="image-container">
          <img src="https://felswebsite.s3.amazonaws.com/WaterStar.png" />
        </div>
      );
    }
  }
}

// https://felswebsite.s3.amazonaws.com/intrographic/unnamed.jpg
//<a href="https://thinkspaces.org/"> thinkspaces.org/ </a>
class PersonalWork extends Component {

  state = {
    mobile: false
  }

  componentDidMount () {
    if(window.innerWidth < 600) {
      this.setState({mobile: true})
    }
  }

  render() {
    return (
      <div>
        <div className= "webCSS">
          <h1 style={{ paddingTop: 40, paddingLeft: 40, color: "#ff6e6e", fontWeight: "bold" }}>
            {" "}
            {"// Personal Work"}
          </h1>
          <br />
          <ExperienceCard2
            name="Material Study - Water"
            date="2019-now"
            tools="Java - Processing"
            graph1="Photo manipulation of water. More to come.."
            mainPhoto={<WaterGraphic mobile= {this.state.mobile}/>}
            graphics={<WaterCard />}
          />
          <br />
          <ExperienceCard2
            name="Internet Child"
            date="2019-now"
            tools="Java - Processing"
            graph1="Conversations with my computer."
            mainPhoto={<InternetChildPhoto mobile= {this.state.mobile}/>}
            graphics={<InternetCard />}
          />
          <br />
          <ExperienceCard2
            name="pLaY"
            date="2019-now"
            tools="Adobe Draw"
            graph1="An exercise on preserving the essence of play, something that I believe disapates as we move into adulthood."
            mainPhoto={<PlayPhoto mobile= {this.state.mobile}/>}
            graphics={<PlayCard />}
          />
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default PersonalWork;
