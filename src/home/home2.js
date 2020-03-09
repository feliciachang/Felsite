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
// </p>  color: "#f88379",
// <a style={{paddingTop: "5px", fontSize: "80px"}}>Felicia Chang</a> &nbsp;
// <a style={{paddingTop: "5px", fontSize: "20px"}}>is</a> &nbsp;
// <a style={{paddingTop: "5px", fontSize: "30px"}}>a</a> &nbsp;
// <a style={{paddingTop: "5px", fontSize: "60px"}}>designer</a> &nbsp;
// <a style={{paddingTop: "5px", fontSize: "30px"}}>exploring</a> &nbsp;
// <a style={{paddingTop: "5px", fontSize: "20px"}}>the</a> &nbsp;
// <a style={{paddingTop: "5px", fontSize: "60px"}}>future of computing</a> &nbsp;
// <a style={{paddingTop: "5px", fontSize: "30px"}}>through</a> &nbsp;
class AboutMe2 extends Component {
  state = {
    compile: false,
    mobile: false,
    left: 0,
    right: 0
  };

  componentDidMount() {
    if (window.innerWidth < 600) {
      this.setState({mobile: true})
    }
  }

  render() {
    console.log(this.state.compile);
    return (
      <div style={{textAlign: "justify"}}>
        <h5 style={{marginLeft: "3%", marginRight: "5%", lineHeight: 1.5, fontWeight: 400}}>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  is an artist/designer/engineer.
        </h5>
      </div>
    );
  }
}

export default AboutMe2;
