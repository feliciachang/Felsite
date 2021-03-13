import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import LazyLoad from "react-lazyload";
import BlogComponent from "../BlogComponent";
import HeaderComponent from "../HeaderComponent";
import { Carousel } from "react-responsive-carousel";

class PoliticCard extends Component {
  render() {
    return (
      <div style={{ marginBottom: "10%" }}>
        <HeaderComponent
          name="The Yale Politic."
          title="Technical Director | 2020 - Now"
          des="The Politic is Yale’s undergraduate journal of politics and culture. The Politic traces its roots to 1947."
          img="https://felswebsite.s3.amazonaws.com/politichome.png"
        />
        <BlogComponent
          number="01."
          title="Overview"
          text="Through one summer, I worked with the Yale Politic team to redesign and build their website into something more sophisticated, akin to the New York Times Magazine."
          image={
            <div style={{ margin: "0 auto" }}>
              <img
                style={{
                  objectFit: "contain",
                  width: "50%",
                  height: "auto",
                  display: "block",
                  margin: "auto",
                }}
                src="https://felswebsite.s3.amazonaws.com/Politic+logo-2.png"
              />
            </div>
          }
        />
        <BlogComponent
          number="02."
          title="Pitching Concepts"
          text="Given a number of design parameters, I produced a few concepts presented in the form of simple mockups. The team was particularly drawn to the rightmost design, which uses the visual language of the Politic logo to designate sections of the paper."
          image={
            <div style={{ margin: "0 auto" }}>
              <img
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "auto",
                  display: "block",
                  margin: "auto",
                }}
                src="https://felswebsite.s3.amazonaws.com/politicpitches.png"
              />
            </div>
          }
        />
        <BlogComponent
          number="03."
          title="Engineering the Website"
          text="The foremost challenge in building the website was familiarizing myself with the Wordpress API and the organization of data. Given The Politic's long history, many articles were organized across different categories which resulted in necessary data cleaning and processing."
          image={
            <div style={{ margin: "0 auto" }}>
              <img
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "auto",
                  display: "block",
                  margin: "auto",
                }}
                src="https://felswebsite.s3.amazonaws.com/politiccode.png"
              />
            </div>
          }
        />
      </div>
    );
  }
}

// <img style={{objectFit: "contain",  width: "100%", height: "auto", display: "block", margin: "auto"}} src="https://felswebsite.s3.amazonaws.com/flossbankcampaignflow.gif" />

export default PoliticCard;
