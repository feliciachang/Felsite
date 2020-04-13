import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import ExperienceCard from "../components/experience-card";
import ThinkspacesCard from "./thinkspaces/thinkspaces-card";
import ConservifyCard from "./conservify-card/conservify-card";
import SamsaraCard from "./samsara-card/samsara-card";
import WeiboCard from "./weibo-card/weibo-card";
import YFashionCard from "./yfashion-card/yfashion-card";
import ExperienceCard2 from "../components/experience-card2";
import SineQuaNonPage from "./sinequanon/sinequanon";
import Posters from "./Posters/poster";
import LuxPage from "./luxetveritas/luxetveritas";
import AboutMe2 from "../home/home2";
import FlossbankPage from "./flossbank/flossbank";
import InternetCard from "./internet_child/internet_child"
import WaterCard from "./water/water"

import { Redirect } from "react-router-dom";
import LazyLoad from "react-lazyload";
import "./web.css";

var bodyStyle = {
  margin: "80px"
};


class SineQuaNonPhoto extends Component {
  render() {
      return (
        <div className="container">
          <LazyLoad offset={100}>
          <img className="image" src="https://felswebsite.s3.amazonaws.com/SineQuaNonDesktop.png" />
          </LazyLoad>
          <div className="middle">
            <div className="text">Sine Qua Non</div>
            <div className="text2">an interactive digital magazine 2019</div>
          </div>
        </div>
      );
  }
}

class YERPhoto extends Component {
  render() {
      return (
        <div className="container">
          <LazyLoad offset={100}>
          <img className="image" src="https://felswebsite.s3.amazonaws.com/yercover.png" />
          </LazyLoad>
          <div className="middle">
            <div className="text">Yale Economic Review</div>
            <div className="text2">a magazine on economic research at Yale 2020 (ongoing)</div>
          </div>
        </div>
      );
  }
}

class FlossbankPhoto extends Component {
  render() {
      return (
        <div className="container">
          <LazyLoad offset={100}>
          <img className="image" src="https://felswebsite.s3.amazonaws.com/flossbankcard.png" />
          </LazyLoad>
          <div className="middle">
            <div className="text">Flossbank</div>
            <div className="text2">send text based ads in the terminal 2019</div>
          </div>
        </div>
      );
  }
}

class ThinkspacesPhoto extends Component {
  render() {
      return (
        <div className="container">
          <LazyLoad offset={100}>
          <img className="image" src="https://felswebsite.s3.amazonaws.com/ThinkspacesHome.png" />
          </LazyLoad>
          <div className="middle">
            <div className="text">Thinkspaces</div>
            <div className="text2">connecting students to projects 2017-2019</div>
          </div>
        </div>
      );
  }
}

class ConservifyPhoto extends Component {
  render() {
      return (
        <div className="container">
          <LazyLoad offset={100}>
          <img className="image" src="https://felswebsite.s3.amazonaws.com/FieldKitStar.png" />
          </LazyLoad>
          // <div className="middle">
          //   <div className="text">Conservify</div>
          //   <div className="text2">making conservation tech accessible 2018-2019</div>
          // </div>
        </div>
      );
  }
}

class SamsaraPhoto extends Component {
  render() {
      return (
        <div className="container">
          <img className="image" src="https://felswebsite.s3.amazonaws.com/SamsaraHome%402x.png" />
          <div className="middle">
            <div className="text">Samsara</div>
          </div>
        </div>
      );
  }
}
class YFashionPhoto extends Component {
  render() {
    if(this.props.mobile) {
      return (
        <div className="image-container2">
          <img src="https://felswebsite.s3.amazonaws.com/YCoverStar.png" />
        </div>
      );
    }
    else {
      return (
        <div className="image-container">
          <img src="https://felswebsite.s3.amazonaws.com/YCoverStar.png" />
        </div>
      );
    }
  }
}

class WeiboPhoto extends Component {
  render() {
      return (
        <div className="container">
          <LazyLoad offset={100}>
          <img className="image" src="https://felswebsite.s3.amazonaws.com/WeiboStar.png" />
          </LazyLoad>
          <div className="middle">
            <div className="text">Sina Weibo</div>
            <div className="text2">china's largest microblogging app 2017</div>
          </div>
        </div>
      );
  }
}
class ReactiveLampPhoto extends Component {
  render() {
      return (
        <div className="container">
          <LazyLoad offset={100}>
          <img className="image" src="https://felswebsite.s3.amazonaws.com/reactivelampcover.png" />
          </LazyLoad>
          <div className="middle">
            <div className="text">Reactive Lamp</div>
            <div className="text2">exploring self-actuation in decorative furniture 2019</div>
          </div>
        </div>
      );
  }
}

class CameraTrapPhoto extends Component {
  render() {
    if(this.props.mobile) {
      return (
        <div className="image-container2">
          <img src="https://felswebsite.s3.amazonaws.com/DSC00308-4.jpg" />
        </div>
      );
    }
    else {
      return (
        <div className="image-container">
          <img src="https://felswebsite.s3.amazonaws.com/DSC00308-4.jpg" />
        </div>
      );
    }
  }
}
class LuxGraphic extends Component {
  render() {
    return(
        <div className="container">
          <LazyLoad offset={100}>
          <img className="image" src="https://felswebsite.s3.amazonaws.com/luxphoto.png" />
          </LazyLoad>
          <div className="middle">
            <div className="text">Lux Et Veritas</div>
            <div className="text2">an art installation in yale's becton cafe 2019</div>
          </div>
        </div>
    )
  }
}

class InternetChildPhoto extends Component {
  render() {
      return (
        <div className="container">
        <LazyLoad offset={100}>
          <img style={{display: "block",
            width: "60%",
            height: "auto"}} src="https://felswebsite.s3.amazonaws.com/InternetChildStar.png" />
        </LazyLoad>
        <div className="middle">
          <div className="text">Internet Child</div>
          <div className="text2">Processing sketches 2019</div>
        </div>
        </div>
      );
  }
}

class WaterGraphic extends Component {
  render() {
      return (
        <div className="container">
        <LazyLoad offset={100}>
          <img className="image"  src="https://felswebsite.s3.amazonaws.com/WaterStar.png" />
          </LazyLoad>
          <div className="middle">
            <div className="text">Material Study</div>
            <div className="text2">Texture manipulation in Processing 2019</div>
          </div>
        </div>
      );
  }
}



//<a href="https://thinkspaces.org/"> thinkspaces.org/ </a>
class Web extends Component {
  state = {
    mobile: false
  }

  componentDidMount () {
    if(window.innerWidth < 600) {
      this.setState({mobile: true})
    }
  }

  goToThinkspaces = () => {
    console.log("blah");
    return <Redirect to="ThinkspacesPage" />;
  };

  render() {
    return (
      <div>
        <div style={{marginLeft:"1%", marginRight:"1%"}}>
          <Row xs="2">
          <Col xs = "auto" lg = "6">
          <h5 style={{marginLeft: "3%", marginRight: "5%", marginTop: "10%", marginBottom: "15%", fontWeight: 400}}>
          ...is an artist/designer/engineer.
          She is currently pursuing a B.A. in Computing and the Arts at Yale University.
          Previously, UX Engineer at Conservify and UI Designer at Weibo.
          </h5>
          </Col>
          <Col xs = "auto" lg = "6">
          </Col>
          <div style={{marginTop:"15%"}}> </div>
          </Row>
          <Row xs="2">
          <Col xs = "auto" lg = "6">

          <ExperienceCard2
            name="Thinkspaces"
            url="/thinkspaces"
            date="2017-now"
            position="Cofounder"
            tools="ReactJS, Firebase, Google Analytics, AdobeXD"
            graph1="Thinkspaces is a web platform that connects students to opportunities on university campuses. Driven by the mission to make collaboration easier between people, Thinkspaces centralizes both student led endeavors like startups, passion projects, and research. In the Spring of 2018, we entered Yale’s Spring Accelerator and won the Audience Choice Award at the final pitchoff."
            graph2=""
            graph3=""
            mainPhoto={<ThinkspacesPhoto mobile= {this.state.mobile}/>}
            graphics={<ThinkspacesCard />}
          />
          </Col>
          <Col xs = "auto" lg = "6">
          <ExperienceCard2
            name="Conservify: FieldKit Mobile App"
            url="/conservify"
            date="2018-2019"
            position="Intern: UI/UX + Frontend Engineering"
            tools="React Native, Redux, Jest, Enzyme, Mapbox API, AdobeXD"
            graph1="Conservify is a nonprofit startup that develops open-source sensor and communication modules with a compatible mobile app and website, used for conservation research by multiple groups including National Geographic. While building the frontend functionality of the mobile app, I took the initiative to propose a complete redesign and infrastracture changes for more intuitive navigation."
            graph2=""
            graph3=""
            mainPhoto={<ConservifyPhoto mobile= {this.state.mobile}/>}
            graphics={<ConservifyCard />}
          />
          </Col>
          </Row>
          <br/>
          <Row xs="2">
          <Col xs = "auto" lg = "6">
          <ExperienceCard2
            name="Weibo"
            url="/weibo"
            date="2018-now"
            position="Intern: UI Design"
            tools="Sketch"
            graph1="Weibo, a microblogging app, is one of the largest social media companies in China with more than 400 million monthly active users. Weibo combines functionalities from many of the social media platforms in the United States and China, with payment capabilities, blogging, and stories."
            graph2="At Weibo, I worked in cross functional teams across product, UX, and software development for a variety of projects over the course of two months."
            graph3=""
            mainPhoto={<WeiboPhoto mobile= {this.state.mobile}/>}
            graphics={<WeiboCard />}
          />
          </Col>
          <Col xs = "auto" lg = "6">
          <ExperienceCard2
            name="Sine Qua Non (in progress)"
            url="/flossbank"
            date="2019-now"
            position="Creator"
            tools="ReactJS, p5js"
            graph1="Sine Qua Non is an interactive digital magazine meant to challenge the current information culture in which content is consumed passively. Through interactivity, Sine Qua Non hopes to make the reader part of the work itself."
            graph2="I received funding from the College of Performing Arts grant to build out the first edition of the magazine. The first edition will be formally released in December. I am currently beta testing the website with a small pool of readers."
            graph3=""
            mainPhoto={<FlossbankPhoto mobile= {this.state.mobile}/>}
            graphics={<FlossbankPhoto/>}
          />
          </Col>
          </Row>
          <Row xs="2">
          <Col xs = "auto" lg = "6">
          <ExperienceCard2
            name="Sine Qua Non (in progress)"
            url="/sinequanon"
            date="2019-now"
            position="Creator"
            tools="ReactJS, p5js"
            graph1="Sine Qua Non is an interactive digital magazine meant to challenge the current information culture in which content is consumed passively. Through interactivity, Sine Qua Non hopes to make the reader part of the work itself."
            graph2="I received funding from the College of Performing Arts grant to build out the first edition of the magazine. The first edition will be formally released in December. I am currently beta testing the website with a small pool of readers."
            graph3=""
            mainPhoto={<SineQuaNonPhoto mobile= {this.state.mobile}/>}
            graphics={<SineQuaNonPage/>}
          />
          </Col>
          <Col xs = "auto" lg = "6">
          <ExperienceCard2
            name="ReactiveLamp"
            url="/reactivelamp"
            date="2019"
            tools="Java - Processing, Raspberry Pi"
            graph1="Lux et veritas is a generative art piece built for LCD installation at the Becton Center at Yale. As an environmental art piece that exists in a functional space, Lux et veritas seeks to engage, communicate, and exist with people."
            mainPhoto={<ReactiveLampPhoto mobile= {this.state.mobile}/>}
            graphics={<ReactiveLampPhoto/>}
          />
          </Col>
          </Row>
          <Row xs="2">
          <Col  xs = "auto" lg = "6">
          <ExperienceCard2
            name="Internet Child"
            url="/internetchild"
            date="2019-now"
            tools="Java - Processing"
            graph1="Conversations with my computer."
            mainPhoto={<InternetChildPhoto mobile= {this.state.mobile}/>}
            graphics={<InternetCard />}
          />
          </Col>
          <Col xs = "auto" lg = "6">
          <ExperienceCard2
            name="Material Study - Water"
            url="/materialstudy"
            date="2019-now"
            tools="Java - Processing"
            graph1="Photo manipulation of water. More to come.."
            mainPhoto={<WaterGraphic mobile= {this.state.mobile}/>}
            graphics={<WaterCard />}
          />
          </Col>
          </Row>
        <br />
        <br />
      </div>
      </div>
    );
  }
}

export default Web;
