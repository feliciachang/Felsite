import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import LazyLoad from "react-lazyload";


class SineQuaNonPage extends Component {
  render() {
    return (
      <div>
      <div style={{margin: "2%"}}>
      <div >
        <Row>
        <Col xs="4">
        <LazyLoad>
          <img style={{height: "100px"}}src="https://felswebsite.s3.amazonaws.com/sinequanonlogo.png" />
        </LazyLoad>
        </Col>
        </Row>
      </div>
      <div style={{paddingTop: "2%"}}>
        <Row>
        <Col xs="4">
        <div>
        <h1 >Sine Qua Non.</h1>
        <p/>
        <p>2019</p>
        <p>Founder</p>
        </div>
        </Col>
        <Col>
        <div>
        <p>Sine Qua Non is an interactive digital magazine meant to challenge the current information culture in which content is consumed passively. Through interactivity, Sine Qua Non hopes to make the reader part of the work itself.</p>
        <p>
        I received funding from the College of Performing Arts grant to build out the first edition of the magazine. The first edition will be formally released in December. I am currently beta testing the website with a small pool of readers.
        </p>
        </div>
        </Col>
        </Row>
      </div>
      <hr/>
          <div style = {{marginTop: "10%"}}>
            <div style={{ textAlign: "center" }}>
            <h3>Design Concept
            </h3>
            <br/>
            </div>
            <div
              style={{
                marginRight: "20%",
                marginLeft: "20%"
              }}
            >
              I intentionally chose colors that were more muted and natural paired with a serif font. In doing so, I wanted to evoke the intimate, yet nostalgic feeling of reading an aged book in which the pages are a little yellowed and discolored. The interactivity that complements each poem is meant to enhance the meaning of the poem in a visual way. It is both immersive yet minimal so as not to distract from the reading.
            </div>
            <br/>
            <div
              style={{
                marginRight: "20%",
                marginLeft: "20%"
              }}
            >
             You may experience the website at https://readsinequanon.com
            </div>
          </div>
          <br/>
          <div
            style={{
              marginRight: "20%",
              marginLeft: "20%"
            }}
          >
          <video style={{width:"100%"}}controls src="https://felswebsite.s3.amazonaws.com/sinequanon.webm" type="video/webm">
              <p>Your browser does not support the video element.</p>
          </video>
          </div>
          <br/>
          <div>
          <div style={{ textAlign: "center" }}>
            <h3>Experimentation
            </h3>
            <br/>
            </div>
            <div
              style={{
                marginRight: "20%",
                marginLeft: "20%"
              }}
            >
              I was very unsure whether I could actually create an interactive magazine simply due to the technical challenge of using p5js, a processing heavy graphics library, for a website. There were many designs that I created that too so much RAM that I thought my computer would pass out. Here is the process for my first iteration, which was a very simple ellipse-square pairing along with a short piece of prose I wrote.
            </div>
            <div className="image-container">
              <LazyLoad>
                <img src="https://felswebsite.s3.amazonaws.com/blueberry2.png" />
              </LazyLoad>
            </div>
            <div className="image-container">
              <LazyLoad>
                <img src="https://felswebsite.s3.amazonaws.com/blueberry3.png" />
              </LazyLoad>
            </div>
          </div>
          <br/>
          <br/>
          <div style={{ textAlign: "center" }}>
            <h3>Logo Design
            </h3>
          </div>
          <div
            style={{
              marginRight: "20%",
              marginLeft: "20%"
            }}
          >
            I kept the logo very similar to the design of the home page to maintain uniformity. The logo is intentionally not very flashy but rather is supposed to simply celebrate the beauty of serif typography, something we see less and less in logo design.
          </div>
          <div className="image-container">
              <img src="https://felswebsite.s3.amazonaws.com/sinequanonlogo.png" />
          </div>
        </div>
        </div>
    );
  }
}

export default SineQuaNonPage;
