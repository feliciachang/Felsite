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
import { Redirect } from "react-router-dom";
import "./web.css";

var bodyStyle = {
  margin: "80px"
};

// <Row>
// <br />
// <ExperienceCard2
//   name="Conservify: Camera Traps on the Edge"
//   date="2019-now"
//   position="Intern: Prototyping + Software Engineering"
//   tools="Python, TensorFlow, Google AIY, Raspberry Pi"
//   graph1="Camera traps are ubiquotous tools in environmental conservation. Most researchers will systematically deploy tens of hundreds of camera traps in the wild to monitor animals. The camera, triggered with an infared sensor, will capture whatever movement it encounters. This is a boon and a curse for researchers, who now have more data than they can process."
//   graph2="As a result, I was tasked with prototyping a camera trap on the edge, using Google AIY's vision project. The Google AIY comes with three core pieces of hardware: a Raspberry Pi, Vision Bonnnet used to process ML models, and a Raspberry Pi Camera. I then attached a PIR sensor and battery so that the camera can capture images autonomously. On the software side, I wrote a Python script that triggered an image capture and ran the resulting image in TensorFlow's image classification model."
//   graph3="After building this simple prototype, I began to dig deeper into different machine learning models that would provide more accurate results. I conducted due diligence on the camera trap space, learning the capabilities of animal recognition today. After speaking with a researcher at Caltech, I concluded that the most practical service we could provide for a camera trap on the edge was robust object detection complemented with an array of different animal identification models based on type and ecosystem. An article on my findings is published on Conservify's Hackaday blog."
//   mainPhoto={<CameraTrapPhoto mobile= {this.state.mobile}/>}
// />
// <br />
// <ExperienceCard2
//   name="Conservify: FieldKit Mobile App"
//   date="2018-2019"
//   position="Intern: UI/UX + Frontend Engineering"
//   tools="React Native, Redux, Jest, Enzyme, Mapbox API, AdobeXD"
//   graph1="Conservify is a nonprofit startup that develops open-source sensor and communication modules with a compatible mobile app and website, used for conservation research by multiple groups including National Geographic. While building the frontend functionality of the mobile app, I took the initiative to propose a complete redesign and infrastracture changes for more intuitive navigation."
//   graph2=""
//   graph3=""
//   mainPhoto={<ConservifyPhoto mobile= {this.state.mobile}/>}
//   graphics={<ConservifyCard />}
// />
// <br />
// <ExperienceCard2
//   name="Samsara"
//   date="2019-now"
//   tools="Photoshop, Lightroom, Illustrator"
//   position="UI/UX + Graphic Design"
//   graph1="Samsara is a working project created by myself and three Yale graduates. We are working to bring traditional Indian perfume called Attar to the American market. A luxury perfume, Samsara focuses on delivering perfume made with pure ingredients and essential oils."
//   graph2=""
//   mainPhoto={<SamsaraPhoto mobile= {this.state.mobile}/>}
//   graphics={<SamsaraCard />}
// />
// <br />
// <ExperienceCard2
//   name="Weibo"
//   date="2018-now"
//   position="Intern: UI Design"
//   tools="Sketch"
//   graph1="Weibo, a microblogging app, is one of the largest social media companies in China with more than 400 million monthly active users. Weibo combines functionalities from many of the social media platforms in the United States and China, with payment capabilities, blogging, and stories."
//   graph2="At Weibo, I worked in cross functional teams across product, UX, and software development for a variety of projects over the course of two months."
//   graph3=""
//   mainPhoto={<WeiboPhoto mobile= {this.state.mobile}/>}
//   graphics={<WeiboCard />}
// />
// <br />
// <ExperienceCard2
//   name="Poster Commissions"
//   date="2016-now"
//   position="Designer"
//   tools="AdobeXD, Illustrator, Lightroom"
//   graph1="Poster commisions for WE@yale, Y Fashion House, and Thinkspaces."
//   graph2=""
//   mainPhoto={<YFashionPhoto mobile= {this.state.mobile}/>}
//   graphics={<Posters/>}
// />
// </div>

// <Col>
// <ExperienceCard2
//   name="Lux Et Veritas"
//   date="2019"
//   tools="Java - Processing, Raspberry Pi"
//   graph1="Lux et veritas is a generative art piece built for LCD installation at the Becton Center at Yale. As an environmental art piece that exists in a functional space, Lux et veritas seeks to engage, communicate, and exist with people. "
//   mainPhoto={<LuxGraphic mobile= {this.state.mobile}/>}
//   graphics={<LuxPage />}
// />
// </Col>

class SineQuaNonPhoto extends Component {
  render() {
      return (
        <div className="container">
          <img className="image" src="https://felswebsite.s3.amazonaws.com/SineQuaNonDesktop.png" />
          <div className="middle">
            <div className="text">Sine Qua Non</div>
            <div className="text2">an interactive digital magazine &emsp; 2019</div>
          </div>
        </div>
      );
  }
}

class ThinkspacesPhoto extends Component {
  render() {
      return (
        <div className="container">
          <img className="image" src="https://felswebsite.s3.amazonaws.com/ThinkspacesHome.png" />
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
          <img className="image" src="https://felswebsite.s3.amazonaws.com/FieldKitStar.png" />
          <div className="middle">
            <div className="text">Conservify</div>
            <div className="text2">making conservation tech accessible 2018-2019</div>
          </div>
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
          <img className="image" src="https://felswebsite.s3.amazonaws.com/WeiboStar.png" />
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
          <img className="image" src="https://felswebsite.s3.amazonaws.com/reactivelampcover.png" />
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
          <img className="image" src="https://felswebsite.s3.amazonaws.com/luxphoto.png" />
          <div className="middle">
            <div className="text">Lux Et Veritas</div>
            <div className="text2">An art installation in Yale's Becton Cafe 2019</div>
          </div>
        </div>
    )
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
        <div style={{marginLeft:"10%", marginRight:"10%", marginBottom: "10%", marginTop:"5%"}}>
          <AboutMe2 />
          </div>
          <div style={{margin: "15%"}}> </div>
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
          <Col xs = "auto" lg = "6">
          <ExperienceCard2
            name="Lux Et Veritas"
            url="/luxetveritas"
            date="2019"
            tools="Java - Processing, Raspberry Pi"
            graph1="Lux et veritas is a generative art piece built for LCD installation at the Becton Center at Yale. As an environmental art piece that exists in a functional space, Lux et veritas seeks to engage, communicate, and exist with people."
            mainPhoto={<LuxGraphic mobile= {this.state.mobile}/>}
            graphics={<LuxPage />}
          />
          </Col>
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
          </Row>
        <br />
        <br />
      </div>
    );
  }
}

export default Web;
