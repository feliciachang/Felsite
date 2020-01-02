import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./home.css";

var divStyle = {
  paddingLeft: "10%"
};
var bodyStyle = {
  margin: "60px"
};

const TogglePhoto = show => {
  console.log(show);
  if (show) {
    return (
      <img
        src="https://felswebsite.s3.amazonaws.com/IMG_2949.GIF"
        height="100%"
      />
    );
  } else {
    return <div />;
  }
};


// <p>
// Find me on  <a href="https://www.linkedin.com/in/felicia-chang-20666112a/">
//   LinkedIn</a>, <a href="https://twitter.com/felchang"> Twitter </a>, and <a href="https://github.com/feliciachang"> Github </a>
// </p>
class AboutMe2 extends Component {
  state = {
    compile: false,
    mobile: false
  };

  componentDidMount() {
    if (window.innerWidth < 600) {
      this.setState({mobile: true})
    }
  }

  render() {
    console.log(this.state.compile);
    return (
      <div>

        <h1 style={{color: "#f88379", fontSize:50}}>Hey there! Felicia here. </h1>
        <h2 style={{lineHeight: 1.5, fontWeight: 300}}>I'm a product designer exploring the future of computing through pixels and code.
        </h2>
      </div>
    );
  }
}

export default AboutMe2;
