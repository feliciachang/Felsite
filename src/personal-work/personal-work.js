import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import ExperienceCard from "../components/experience-card";
import ExperienceCard2 from "../components/experience-card2";
import PlayCard from "./play/play.js";
import InternetCard from "./internet_child/internet_child.js";
import GraphicCard from "./graphicdesign/graphicdesign.js";
import WaterCard from "./water/water.js"
import LuxPage from "./luxetveritas/luxetveritas.js";
import { Redirect } from "react-router-dom";
import LazyLoad from "react-lazyload";
import "../web/web.css";

var bodyStyle = {
  margin: "80px"
};

class InternetChildPhoto extends Component {
  render() {
      return (
        <div className="container">
        <LazyLoad offset={100}>
          <img className="image" src="https://felswebsite.s3.amazonaws.com/InternetChildStar.png" />
        </LazyLoad>
        <div className="middle">
          <div className="text">Internet Child</div>
          <div className="text2">Processing sketches 2019</div>
        </div>
        </div>
      );
  }
}

class PlayPhoto extends Component {
  render() {
      return (
        <div className="container">
        <LazyLoad offset={100}>
          <img src="https://felswebsite.s3.amazonaws.com/PlayStar.png" />
        </LazyLoad>
        <div className="middle">
          <div className="text">pLaY</div>
          <div className="text2">Adobe Doodles 2019</div>
        </div>
        </div>
      );
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
      return (
        <div className="container">
        <LazyLoad offset={100}>
          <img src="https://felswebsite.s3.amazonaws.com/WaterStar.png" />
          </LazyLoad>
          <div className="middle">
            <div className="text">Material Study</div>
            <div className="text2">Texture manipulation in Processing 2019</div>
          </div>
        </div>
      );
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
            url="/materialstudy"
            date="2019-now"
            tools="Java - Processing"
            graph1="Photo manipulation of water. More to come.."
            mainPhoto={<WaterGraphic mobile= {this.state.mobile}/>}
            graphics={<WaterCard />}
          />
          <br />
          <ExperienceCard2
            name="Internet Child"
            url="/internetchild"
            date="2019-now"
            tools="Java - Processing"
            graph1="Conversations with my computer."
            mainPhoto={<InternetChildPhoto mobile= {this.state.mobile}/>}
            graphics={<InternetCard />}
          />
          <br />
          <ExperienceCard2
            name="pLaY"
            url="/play"
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
