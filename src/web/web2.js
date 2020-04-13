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
import YERCard from "./yer/yer";
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
        <div style={{maxWidth:"60vw"}}>
          <LazyLoad offset={100}>
          <img className="image" src="https://felswebsite.s3.amazonaws.com/sinequanoncover.png" />
          </LazyLoad>
        </div>
      );
  }
}

class YERPhoto extends Component {
  render() {
      return (
        <div style={{maxWidth:"60vw"}}>
          <LazyLoad offset={100}>
          <img className="image" src="https://felswebsite.s3.amazonaws.com/yercover.png" />
          </LazyLoad>
        </div>
      );
  }
}

class FlossbankPhoto extends Component {
  render() {
      return (
        <div style={{maxWidth:"60vw"}}>
          <LazyLoad offset={100}>
          <img className="image" src="https://felswebsite.s3.amazonaws.com/flossbankcover.png" />
          </LazyLoad>
        </div>
      );
  }
}

class ThinkspacesPhoto extends Component {
  render() {
      return (
        <div style={{maxWidth:"60vw"}}>
          <LazyLoad offset={100}>
          <img className="image" src="https://felswebsite.s3.amazonaws.com/thinkspacescover.png" />
          </LazyLoad>
        </div>
      );
  }
}

class ConservifyPhoto extends Component {
  render() {
      return (
        <div style={{maxWidth:"60vw"}}>
          <LazyLoad offset={100}>
          <img className="image" src="https://felswebsite.s3.amazonaws.com/fieldkitcover.png" />
          </LazyLoad>
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
        <div style={{maxWidth:"60vw"}}>
          <LazyLoad offset={100}>
          <img style={{display: "block",
            width: "68%",
            height: "auto"}} src="https://felswebsite.s3.amazonaws.com/lampcover.png" />
          </LazyLoad>
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
        <div style={{maxWidth:"60vw"}}>
        <LazyLoad offset={100}>
          <img className="image" src="https://felswebsite.s3.amazonaws.com/internetchildgroup.png" />
        </LazyLoad>
        </div>
      );
  }
}

class RedLinePhoto extends Component {
  render() {
      return (
        <div style={{maxWidth:"60vw"}}>
        <LazyLoad offset={100}>
        <img style={{display: "block",
          width: "75%",
          height: "auto"}} className="image" src="https://felswebsite.s3.amazonaws.com/itjustsohappens.png" />
        </LazyLoad>
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

//
// <ExperienceCard2
//   name="Thinkspaces"
//   url="/thinkspaces"
//   date="2017-now"
//   position="Cofounder"
//   tools="ReactJS, Firebase, Google Analytics, AdobeXD"
//   graph1="Thinkspaces is a web platform that connects students to opportunities on university campuses. Driven by the mission to make collaboration easier between people, Thinkspaces centralizes both student led endeavors like startups, passion projects, and research. In the Spring of 2018, we entered Yale’s Spring Accelerator and won the Audience Choice Award at the final pitchoff."
//   graph2=""
//   graph3=""
//   mainPhoto={<ThinkspacesPhoto mobile= {this.state.mobile}/>}
//   graphics={<ThinkspacesCard />}
// />
// </Col>
// <Col xs = "auto" lg = "6">
// <ExperienceCard2
//   name="Conservify: FieldKit Mobile App"
//   url="/conservify"
//   date="2018-2019"
//   position="Intern: UI/UX + Frontend Engineering"
//   tools="React Native, Redux, Jest, Enzyme, Mapbox API, AdobeXD"
//   graph1="Conservify is a nonprofit startup that develops open-source sensor and communication modules with a compatible mobile app and website, used for conservation research by multiple groups including National Geographic. While building the frontend functionality of the mobile app, I took the initiative to propose a complete redesign and infrastracture changes for more intuitive navigation."
//   graph2=""
//   graph3=""
//   mainPhoto={<ConservifyPhoto mobile= {this.state.mobile}/>}
//   graphics={<ConservifyCard />}
// />
// </Col>
// </Row>
// <br/>
// <Row xs="2">
// <Col xs = "auto" lg = "6">
// <ExperienceCard2
//   name="Weibo"
//   url="/weibo"
//   date="2018-now"
//   position="Intern: UI Design"
//   tools="Sketch"
//   graph1="Weibo, a microblogging app, is one of the largest social media companies in China with more than 400 million monthly active users. Weibo combines functionalities from many of the social media platforms in the United States and China, with payment capabilities, blogging, and stories."
//   graph2="At Weibo, I worked in cross functional teams across product, UX, and software development for a variety of projects over the course of two months."
//   graph3=""
//   mainPhoto={<WeiboPhoto mobile= {this.state.mobile}/>}
//   graphics={<WeiboCard />}
// />
// </Col>
// <Col xs = "auto" lg = "6">
// <ExperienceCard2
//   name="Sine Qua Non (in progress)"
//   url="/flossbank"
//   date="2019-now"
//   position="Creator"
//   tools="ReactJS, p5js"
//   graph1="Sine Qua Non is an interactive digital magazine meant to challenge the current information culture in which content is consumed passively. Through interactivity, Sine Qua Non hopes to make the reader part of the work itself."
//   graph2="I received funding from the College of Performing Arts grant to build out the first edition of the magazine. The first edition will be formally released in December. I am currently beta testing the website with a small pool of readers."
//   graph3=""
//   mainPhoto={<FlossbankPhoto mobile= {this.state.mobile}/>}
//   graphics={<FlossbankPhoto/>}
// />
// </Col>
// </Row>
// <Row xs="2">
// <Col xs = "auto" lg = "6">
// <ExperienceCard2
//   name="Sine Qua Non (in progress)"
//   url="/sinequanon"
//   date="2019-now"
//   position="Creator"
//   tools="ReactJS, p5js"
//   graph1="Sine Qua Non is an interactive digital magazine meant to challenge the current information culture in which content is consumed passively. Through interactivity, Sine Qua Non hopes to make the reader part of the work itself."
//   graph2="I received funding from the College of Performing Arts grant to build out the first edition of the magazine. The first edition will be formally released in December. I am currently beta testing the website with a small pool of readers."
//   graph3=""
//   mainPhoto={<SineQuaNonPhoto mobile= {this.state.mobile}/>}
//   graphics={<SineQuaNonPage/>}
// />
// </Col>
// <Col xs = "auto" lg = "6">
// <ExperienceCard2
//   name="ReactiveLamp"
//   url="/reactivelamp"
//   date="2019"
//   tools="Java - Processing, Raspberry Pi"
//   graph1="Lux et veritas is a generative art piece built for LCD installation at the Becton Center at Yale. As an environmental art piece that exists in a functional space, Lux et veritas seeks to engage, communicate, and exist with people."
//   mainPhoto={<ReactiveLampPhoto mobile= {this.state.mobile}/>}
//   graphics={<ReactiveLampPhoto/>}
// />
// </Col>
// </Row>
// <Row xs="2">
// <Col  xs = "auto" lg = "6">
// <ExperienceCard2
//   name="Internet Child"
//   url="/internetchild"
//   date="2019-now"
//   tools="Java - Processing"
//   graph1="Conversations with my computer."
//   mainPhoto={<InternetChildPhoto mobile= {this.state.mobile}/>}
//   graphics={<InternetCard />}
// />
// </Col>
// <Col xs = "auto" lg = "6">
// <ExperienceCard2
//   name="Material Study - Water"
//   url="/materialstudy"
//   date="2019-now"
//   tools="Java - Processing"
//   graph1="Photo manipulation of water. More to come.."
//   mainPhoto={<WaterGraphic mobile= {this.state.mobile}/>}
//   graphics={<WaterCard />}
// />
// </Col>
// </Row>

//<a href="https://thinkspaces.org/"> thinkspaces.org/ </a>





// <br/>
// <br/>
// <h6 style={{marginLeft: "2%", marginRight: "5%",  marginBottom: "2%", fontWeight: 500}}>
// &#x25BD; Built Experiments
// </h6>
// <div style={{display:"flex", flexWrap: "nowrap", overflowX: "auto", cursor: "e-resize"}}>
// <div style={{flex: "0 0 auto"}}>
// <ExperienceCard2
//   name="ReactiveLamp"
//   url="/reactivelamp"
//   date="2019"
//   tools="Java - Processing, Raspberry Pi"
//   graph1="Lux et veritas is a generative art piece built for LCD installation at the Becton Center at Yale. As an environmental art piece that exists in a functional space, Lux et veritas seeks to engage, communicate, and exist with people."
//   mainPhoto={<ReactiveLampPhoto mobile= {this.state.mobile}/>}
//   graphics={<ReactiveLampPhoto/>}
// />
// </div>
// </div>

class Web extends Component {

  constructor(props){
    super(props);
    this.ref=React.createRef();
  }

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

  clickFunc = () => {
    this.ref.current.scrollLeft += 20;
  }

  render() {

    return (
      <div>
        <div style={{marginLeft:"4%", marginRight:"5%"}}>
          <Row xs="2">
          <Col xs = "auto" lg = "6">
          <h6 style={{marginLeft: "3%", marginRight: "5%", marginTop: "5%", marginBottom: "10%", fontWeight: 500}}>
          Currently punching pixels at Yale University, B.A. in Computing and the Arts. Previously, UX Engineer at <a style={{textDecoration: "underline", color:"#1a1a1a"}} href="http://conservify.org/">Conservify</a> and UI Designer at <a style={{textDecoration: "underline", color:"#1a1a1a"}} href="https://en.wikipedia.org/wiki/Sina_Weibo">Sina Weibo</a>.
          </h6>
          </Col>
          <Col xs = "auto" lg = "6">
          </Col>
          <div style={{marginTop:"5%"}}> </div>
          </Row>
          <h6 ref={this.ref} onClick={this.clickFunc} style={{marginLeft: "2%", marginRight: "5%", marginBottom: "2%", fontWeight: 500}}>
          &#x25BD; Design Work
          </h6>

          <div style={{display:"flex", flexWrap: "nowrap", overflowX: "auto", cursor: "e-resize"}}>
          <div style={{flex: "0 0 auto", cursor: "pointer"}}>
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
          </div>
          <div style={{flex: "0 0 auto", cursor: "pointer"}}>
          <ExperienceCard2
            name="Yale Economic Review"
            url="/yer"
            date="2020-now"
            position="Web Editor"
            tools="ReactJS, Contentful, AdobeXD"
            graph1="The Yale Economic Review is a print and digital magazine on economic research by students at Yale. After being discontinued for two years, a team of economic students are are looking to revamp and restart the publication"
            graph2=""
            graph3=""
            mainPhoto={<YERPhoto mobile= {this.state.mobile}/>}
            graphics={<YERCard />}
          />
          </div>
          <div style={{flex: "0 0 auto", cursor: "pointer"}}>
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
          </div>
          <div style={{flex: "0 0 auto", cursor: "pointer"}}>
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
          </div>
          </div>

          <br/>
          <br/>
          <h6 style={{marginLeft: "2%", marginRight: "5%",  marginBottom: "2%", fontWeight: 500}}>
          &#x25BD; Experiments
          </h6>

          <div style={{display:"flex", flexWrap: "nowrap", overflowX: "auto", cursor: "e-resize"}}>
          <div style={{flex: "0 0 auto", cursor: "pointer"}}>
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
          </div>
          <div style={{flex: "0 0 auto", cursor: "pointer"}}>
          <ExperienceCard2
            name="Red Line Card"
            url="/processing2020"
            date="2019-now"
            tools="Java - Processing"
            graph1="Conversations with my computer."
            mainPhoto={<RedLinePhoto mobile= {this.state.mobile}/>}
            graphics={<InternetCard />}
          />
          </div>
          <div style={{flex: "0 0 auto", cursor: "pointer"}}>
          <ExperienceCard2
            name="Internet Child"
            url="/internetchild"
            date="2019-now"
            tools="Java - Processing"
            graph1="Conversations with my computer."
            mainPhoto={<InternetChildPhoto mobile= {this.state.mobile}/>}
            graphics={<InternetCard />}
          />
          </div>
          <div style={{flex: "0 0 auto", cursor: "pointer"}}>
          <ExperienceCard2
            name="ReactiveLamp"
            url="/reactivelamp"
            date="2019"
            tools="Java - Processing, Raspberry Pi"
            graph1="Lux et veritas is a generative art piece built for LCD installation at the Becton Center at Yale. As an environmental art piece that exists in a functional space, Lux et veritas seeks to engage, communicate, and exist with people."
            mainPhoto={<ReactiveLampPhoto mobile= {this.state.mobile}/>}
            graphics={<ReactiveLampPhoto/>}
          />
          </div>
          </div>
          <br/>
          <br/>
          <h6 style={{marginLeft: "3%", marginRight: "5%", marginTop: "5%", marginBottom: "5%", fontWeight: 500}}>
          &#9655;  You can also find me on <a style={{textDecoration: "underline", color:"#1a1a1a"}} href="https://twitter.com/felchang">Twitter</a> or feel free to send a <a style={{textDecoration: "underline", color:"#1a1a1a"}} href="mailto:felicia.chang@yale.edu">message</a>.
          </h6>
      </div>
      </div>
    );
  }
}

export default Web;
