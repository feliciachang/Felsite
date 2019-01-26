import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';

var divStyle = {
    margin: "50px",
    font: 'Helvetica'
}
var bodyStyle = {
    margin: "80px"
}

class Education extends Component {
  render() {
    return (
      <div style = {divStyle}>
        <header >
            <h1>{"// Education"} </h1>
        </header>
        <br></br>
        <div >
            <br></br>
            <h3> Yale University </h3>
            <br></br>
            <p> Major: Computer Science </p>
            <p> Graduation: 2020 </p>
            <p>  Relevant courses: Data Structures and Programming Techniques, Introducation to Computer Science, Mathematical Tools for Computer Science </p>
            <p>  Activities: Varsity Women's Golf, Yale Roosevelt Institute, Y Fashion House </p>
            <br></br>
            <h3> Troy High School </h3>
            <br></br>
            <p> Graduation: 2016 </p>
            <p>  Activities: Top 100 Nationally Ranked in Junior Women's Golf, Oracle Newspaper Photographer </p>
        </div>
        <br></br>
        <br></br>

        <hr></hr>
      </div>
    );
  }
}

export default Education;
