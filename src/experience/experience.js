import React, { Component } from "react";
import { Row, Col } from "reactstrap";

var divStyle = {
  margin: "50px",
  font: "Helvetica"
};
var bodyStyle = {
  margin: "80px"
};

class Experience extends Component {
  render() {
    return (
      <div style={divStyle}>
        <header>
          <h1>{"// Experience"} </h1>
        </header>
        <br />
        <div>
          <br />
          <h3> Conservify Frontend: Software Engineer Intern </h3>
          <p> Dec 2018 - Now </p>
          <br />
          <h3> Weibo: User Interface Design Intern </h3>
          <p> June 2018 - Aug 2018 </p>
          <br />
          <h3> Tsai City Center for Innovation: Student Ambassador </h3>
          <p> Nov 2017 - Oct 2018 </p>
          <br />
          <p>
            {" "}
            For more details or to connect, find me on
            <a href="https://www.linkedin.com/in/felicia-chang-20666112a/">
              {" "}
              Linkedin{" "}
            </a>
          </p>
        </div>
        <br />
        <br />

        <hr />
      </div>
    );
  }
}

export default Experience;
