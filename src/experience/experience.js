import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';

var divStyle = {
    margin: "50px",
    font: 'Helvetica'
}
var bodyStyle = {
    margin: "80px"
}

class Experience extends Component {
  render() {
    return (
      <div style = {divStyle}>
        <header >
            <h1>{"// Experience"} </h1>
        </header>
        <br></br>
        <div >
            <br></br>
            <h3> MeridianLink:  Management Intern </h3>
            <p> Feb 2019 - Aug 2019 </p>
            <br></br>
            <h3> Conservify Frontend:  Software Engineer Intern </h3>
            <p> Dec 2018 - Aug 2019 </p>
            <br></br>
            <h3> Weibo:  User Interface Design Intern </h3>
            <p> June 2018 - Aug 2018 </p>
            <br></br>
            <h3> Tsai City Center for Innovation:  Student Ambassador </h3>
            <p> June 2018 - Aug 2018 </p>
            <br></br>
            <p> For more details or to connect, find me on
            <a href = "https://www.linkedin.com/in/felicia-chang-20666112a/"> Linkedin </a></p>
        </div>
        <br></br>
        <br></br>

        <hr></hr>
      </div>
    );
  }
}

export default Experience;
