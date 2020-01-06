import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import LazyLoad from "react-lazyload";
import BlogComponent from "../BlogComponent";
import HeaderComponent from "../HeaderComponent";
import { Carousel } from "react-responsive-carousel";

class FlossbankPage extends Component {
  render () {
    return(
      <div style={{marginBottom: "10%"}}>
      <HeaderComponent
      name="Flossbank."
      title="Product Designer | 2019 - Now"
      des="Flossbank is an early stage startup based in Seattle that runs text-based ads in the terminal. In doing so, Flossbank can help open source engineers gain a sustainable income for their work."
      img="https://felswebsite.s3.amazonaws.com/flossbankcover.png"
      />
      <BlogComponent
      number="01."
      title="Overview"
      text="From October to December of 2019, I worked with the founder to develop the complete UI/UX for advertisers looking to buy ad space. The main pieces of the advertiser flow included sign up, building a campaign, and building a dashboard with campaign history and analytics."
      image={
        <div style={{margin: "0 auto"}}>
          <img style={{objectFit: "contain",  width: "100%", height: "auto", display: "block", margin: "auto"}} src="https://felswebsite.s3.amazonaws.com/flossbankvid.gif" />
        </div>}
      />
      <BlogComponent
      number="02."
      title="Building the Campaign Flow"
      text="The first step of conceptualizing the UX design was building the user flow advertisers would make when creating their campaign. Having distilled the campaign flow into four steps, I decided to organize each step into a collapsable module. The collapsable modules allowed users to have a clear overview of the flow while maintaining a clear step-by-step order."
      image={
        <Carousel
          useKeyboardArrows={true}
          showIndicators={false}
          showStatus={false}
          showArrows={false}
        >
          <div>
            <img src="https://felswebsite.s3.amazonaws.com/flossbankcampaign1.png" />
          </div>
          <div>
            <img src="https://felswebsite.s3.amazonaws.com/flossbankcampaign2.png" />
          </div>
          <div>
            <img src="https://felswebsite.s3.amazonaws.com/flossbankcampaign3.png" />
          </div>
          <div>
            <img src="https://felswebsite.s3.amazonaws.com/flossbankcampaign4.png" />
          </div>
        </Carousel>}
      />
      <BlogComponent
      number="03."
      title="Building the Dashboard"
      text="The second step involved designing the advertiser dashboard where users could see their performance statistics, active and inactive campaigns, and settings. Building the dashboard turned out to be a greater UI rather than UX challenge, as I needed to design various types of components to organize information."
      image={
        <Carousel
          useKeyboardArrows={true}
          showIndicators={false}
          showStatus={false}
          showArrows={false}
        >
          <div>
            <img src="https://felswebsite.s3.amazonaws.com/flossbankdashboard1.png" />
          </div>
          <div>
            <img src="https://felswebsite.s3.amazonaws.com/flossbankdashboard3.png" />
          </div>
          <div>
            <img src="https://felswebsite.s3.amazonaws.com/flossbankdashboard2.png" />
          </div>
        </Carousel>}
      />
      <BlogComponent
      number="04."
      title="Detailing the Experience"
      text="After building the UI for the main components, I needed to conceptualize all the UX details. The Campaigns page was most complicated; despite appearing as a simple database, each entry was editable and each column served as a filter. Examples of such navigation can be seen to the right."
      image={
        <div style={{margin: "0 auto"}}>
        <img style={{objectFit: "contain",  width: "100%", height: "auto", display: "block", margin: "auto"}} src="https://felswebsite.s3.amazonaws.com/flossbankcampaignsflow.gif" />
        </div>}
      />
      <BlogComponent
      number="04."
      title="Building a Design System"
      text="In order to create a unified experience, I developed a design system with guidelines for text, color, components, and icons. The design system was built through multiple conversations with the founder, making sure that the UI aligned with the brand identity. To the founder, breathability was the most important visual characteristic, which inspired the modular component design, blue accents and muted color tones overall."
      image={
        <div style={{margin: "0 auto"}}>
          <img style={{objectFit: "contain",  width: "100%", height: "auto", display: "block", margin: "auto"}} src="https://felswebsite.s3.amazonaws.com/flossbankdesignsystem.png" />
        </div>}
      />
      </div>

    )
  }
}

          // <img style={{objectFit: "contain",  width: "100%", height: "auto", display: "block", margin: "auto"}} src="https://felswebsite.s3.amazonaws.com/flossbankcampaignflow.gif" />

export default FlossbankPage;
