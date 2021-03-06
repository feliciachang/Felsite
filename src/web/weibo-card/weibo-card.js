import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import BlogComponent from "../BlogComponent";
import HeaderComponent from "../HeaderComponent";

class WeiboCard extends Component {
  render(){
    return(
      <div>
      <HeaderComponent
        name="Sina Weibo."
        title="UI Design Intern | 2018 Summer"
        des="Weibo is one of China's largest microblogging apps with over 100 million users. Similar to Facebook, Weibo provides a suite of services outside of microblogging, such as stores, minigames, and money transfer."
        color= "#FFFCDE"
        img="https://felswebsite.s3.amazonaws.com/weibocoverphoto.png"
      />
      <BlogComponent
      number="01."
      title="My Focus"
      text="As a UI design intern, I worked on two main projects. In my first project, I conducted analysis on card designs amongst Chinese news apps. In my second project, I contributed to an in-app minigame called Panda keeper."
      image={
        <div style={{margin: "0 auto"}}>
        </div>}
      />
      <BlogComponent
      number="02."
      title="Card Design Competitive Analysis"
      text="I compiled a library of news feed card designs from five of Weibo's competitors to help inform Weibo's card design decisions. An exerpt of the study may be viewed in the slideshow below."
      image={
        <div style={{margin: "0 auto"}}>
                  <Carousel
                    useKeyboardArrows={true}
                    showIndicators={false}
                    showStatus={false}
                    showArrows={false}
                  >
                    <div>
                      <img src="https://felswebsite.s3.amazonaws.com/WeiboCardStudy+%E2%80%93+1.png" />
                    </div>
                    <div>
                      <img src="https://felswebsite.s3.amazonaws.com/WeiboCardStudy+%E2%80%93+2.png" />
                    </div>
                    <div>
                      <img src="https://felswebsite.s3.amazonaws.com/WeiboCardStudy+%E2%80%93+4.png" />
                    </div>
                    <div>
                      <img src="https://felswebsite.s3.amazonaws.com/WeiboCardStudy+%E2%80%93+5.png" />
                    </div>
                  </Carousel>
        </div>}
      />
      <BlogComponent
      number="03."
      title="Panda Keeper Minigame"
      text="Our goal with the minigame was to educate users of the environment through postcards that depicted different types of bamboo species the user's panda came across in its travels. Thus, our postcards needed to be engaging for users to scroll through and read."
      image={
        <div style={{margin: "0 auto"}}>
        </div>}
      />
      <div style={{margin: "0 auto"}}>
      <img style={{objectFit: "contain", maxHeight: 500, display: "block", margin: "auto"}} src="https://felswebsite.s3.amazonaws.com/PandaKeeperCards+%E2%80%93+1.png" />
      </div>
      </div>
    )
  }
}

//
// class WeiboCard extends Component {
//   render() {
//     return (
//       <div>
//       <div style={{margin: "2%"}}>
//       <div >
//         <Row>
//         <Col xs="4">
//           <img style={{height: "100px"}}src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Sina_Weibo.svg/1200px-Sina_Weibo.svg.png" />
//         </Col>
//         </Row>
//       </div>
//       <div style={{paddingTop: "2%"}}>
//         <Row>
//         <Col xs="4">
//         <div>
//         <h1 >Sina Weibo.</h1>
//         <p/>
//         <p>2018 Summer</p>
//         <p>UI Design Intern</p>
//         </div>
//         </Col>
//         <Col>
//         <div>
//         <p>Thinkspaces is a web platform that connects students to opportunities on university campuses. Driven by the mission to make collaboration easier between people, Thinkspaces centralizes both student led endeavors like startups, passion projects, and research. In the Spring of 2018, we entered Yale’s Spring Accelerator and won the Audience Choice Award at the final pitchoff.</p>
//         </div>
//         </Col>
//         </Row>
//       </div>
//       <hr/>
//         <h3 style={{ textAlign: "center", marginTop: "10%"}}>
//           Project 1: Card Design Competitive Analysis
//         </h3>
//         <br />
//         <p style={{ marginLeft: "20%", marginRight: "20%" }}>
//           I compiled a library of news feed card designs from five of Weibo's
//           competitors to help inform Weibo's card design decisions. An exerpt of the study may be viewed in the
//           slideshow below.
//         </p>
//         <br />
//         <div
//           style={{
//             marginRight: "20%",
//             marginLeft: "20%"
//           }}
//         >
//           <Carousel
//             useKeyboardArrows={true}
//             showIndicators={false}
//             showStatus={false}
//             showArrows={false}
//           >
//             <div>
//               <img src="https://felswebsite.s3.amazonaws.com/WeiboCardStudy+%E2%80%93+1.png" />
//             </div>
//             <div>
//               <img src="https://felswebsite.s3.amazonaws.com/WeiboCardStudy+%E2%80%93+2.png" />
//             </div>
//             <div>
//               <img src="https://felswebsite.s3.amazonaws.com/WeiboCardStudy+%E2%80%93+4.png" />
//             </div>
//             <div>
//               <img src="https://felswebsite.s3.amazonaws.com/WeiboCardStudy+%E2%80%93+5.png" />
//             </div>
//           </Carousel>
//           <br />
//           <br />
//           <h3 style={{ textAlign: "center", paddingTop: 50 }}>
//             Project 2: Panda Keeper Minigame
//           </h3>
//           <br />
//           <p>
//             Panda Keeper is an environmental awareness in-app minigame.
//             Our goal with the minigame was to educate users of the environment through postcards that
//             that depicted different types of bamboo species the user's panda came across in its travels.
//             Thus, our postcards needed to be engaging for users to scroll through and read.
//           </p>
//           <br />
//           <div className="image-container3">
//             <img src="https://felswebsite.s3.amazonaws.com/PandaKeeperCards+%E2%80%93+1.png" />
//           </div>
//           <br />
//           <br />
//           <h3 style={{ textAlign: "center", paddingTop: 50 }}>
//             Project 3: Super Hashtag Icon Design
//           </h3>
//           <br />
//           <p>
//             Super Hashtag was a new app for trending topics from the Weibo app.
//             When designing the icon, I was thinking about how to best depict virality while staying close to the Weibo logo and color palette.
//           </p>
//           <br />
//           <div className="image-container3">
//             <img src="https://felswebsite.s3.amazonaws.com/Web+1920+%E2%80%93+1.png" />
//           </div>
//           <br />
//         </div>
//       </div>
//       </div>
//     );
//   }
// }

export default WeiboCard;
