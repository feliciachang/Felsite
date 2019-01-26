import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import Example from '../carousel/carousel';

var divStyle = {
    margin: "50px",
    font: 'Helvetica'
}
var bodyStyle = {
    margin: "80px"
}


class Art extends Component {

render(){
      return (

      <div style = {divStyle}>
        <header >
            <h1>{"// Art"} </h1>
        </header>
        <br></br>
        <div >
        <Row>
            <Col xs="5">
            <p> {"<control with arrow keys>"} </p>
            <p> 1. Untitled </p>
            <p> 2. Plant Head </p>
            <p> 3. Prayer Room </p>
            <p> 4. In Flight </p>
            <p> 5. A Semblance of Peace </p>
            <br></br>
            <br></br>
            <p> For photography check out
                <a href= "https://feltoast.wordpress.com/"> FELTOAST </a>
            </p>
            </Col>
            <Col>

            <Example/>
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

export default Art;
