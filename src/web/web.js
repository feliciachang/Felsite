import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';

var divStyle = {
    margin: "50px",
    font: 'Helvetica'
}
var bodyStyle = {
    margin: "80px"
}

class Web extends Component {
  render() {
    return (
      <div style = {divStyle}>
        <header >
            <h1>{"// Web"} </h1>
        </header>
        <br></br>
        <div >
            <Row>
                <Col xs="3">
                <img src = "https://s3.amazonaws.com/felswebsite/Slice+2.png" width = "300" height = "300"/>
                </Col>
                <Col xs="auto">
                <br></br>
                <h3> Thinkspaces </h3>
                <br></br>
                <p>  Thinkspaces is a web platform that seeks to connect students to cool projects on college campuses. </p>
                <p>  Based at Yale, Thinkspaces hosts a variety of projects, startups, and creative endeavors.</p>
                <p>  Check it out here:
                    <a href = "https://thinkspaces.org/"> thinkspaces.org/ </a>
                </p>

                </Col>
            </Row>
        </div>
        <br></br>
        <br></br>

        <hr></hr>
      </div>
    );
  }
}

export default Web;
