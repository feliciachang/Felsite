import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import LazyLoad from "react-lazyload";
import BlogComponent from "../BlogComponent.js"
import HeaderComponent from "../HeaderComponent.js"

class ReactiveLamp extends Component {
  render(){
    return(
      <div>
      <HeaderComponent
        name="Reactive Lamp."
        title="Class Project | 2019 Fall"
        des="The Reactive Lamp explores the possibilities for embedded systems in our lived environment. In its essence, the Reactive Lamp is a lamp that allows the user to adjust its lampshade to control the level of emitted light."
        color= "#FFFCDE"
        img="https://felswebsite.s3.amazonaws.com/lampcover.jpg"
      />
      <BlogComponent
      number="01."
      title="My Goal"
      text="The ability to customize light is not novel technology. However, most of these systems manipulate the light emitted from the light bulb rather than the light filtered from lampshade. By changing the mode of interaction, I hope to create an alternative experience for the user that is both functional and sculptural. Each state of the lampshade, whether the lampshade is collapsed or extended, produces a different visual experience."
      image={
        <div style={{margin: "0 auto"}}>
        <img style={{objectFit: "contain",  width: "100%", height: "auto", display: "block", margin: "auto"}} src="https://felswebsite.s3.amazonaws.com/lampgif.gif"/>
        </div>}
      />
      <BlogComponent
      number="02."
      title="Building the lampshade"
      text="The lampshade consisted of two key parts, the wooden frame and the fabric exterior. To create the wooden frame, I laser cut concentric circles of 1/8th inch of various sizes and strung them together with thin copper wire. I then wrapped a wispy, red yarn around the entire structure."
      image={
        <div style={{margin: "0 auto"}}>
        <img style={{objectFit: "contain", width: "100%", height: "auto", display: "block", margin: "auto"}} src="https://felswebsite.s3.amazonaws.com/lampquick.gif"/>
        </div>}
      />
      <BlogComponent
      number="03."
      title="Building the functionality"
      text="To make the lampshade move up and down, I created a pulley system using a DC motor with two rotating arms. I then attached strings from the arms to the bottom of the lamp. Building this pulley system required many rounds of experimentation with different motors and rotating arms. An early version can be seen in the photo on the right."
      image={
        <div style={{margin: "0 auto", align:"center"}}>
        <img style={{objectFit: "contain", width: "80%", height: "auto", display: "block", margin: "auto"}} src="https://felswebsite.s3.amazonaws.com/lampmotorsystem.jpg"/>
        </div>}
      />
      <BlogComponent
      number="04."
      title="Future work"
      text="I would like to continue exploring the use of modular cross-sections of shapes to allow for flexible movement. I am interested in creating a program that automates this specific production by providing design details on the distance between cross sections and necessary actuation points. Please let me know if you'd like to collaborate!"
      image={
        <div style={{margin: "0 auto", align:"center"}}>
        <img style={{objectFit: "contain", width: "80%", height: "auto", display: "block", margin: "auto"}} src="https://felswebsite.s3.amazonaws.com/lampstatic.JPG"/>
        </div>}
      />
      </div>
    )
  }
}

export default ReactiveLamp;
