import React, { Component } from "react";
import { Row, Col } from "reactstrap";
class Posters extends Component {
  render() {
    return (
      <div >
      <Row>
      <Col>
         <div className="image-container">
           <img src="https://felswebsite.s3.amazonaws.com/y+fashion+promo+poster.jpg" />
         </div>
         </Col>
         <Col>
         <div className="image-container">
           <img src="https://felswebsite.s3.amazonaws.com/ThinkspacesxNotion.png" />
         </div>
         </Col>
         <Col>
         <div className="image-container">
           <img src="https://felswebsite.s3.amazonaws.com/jennifer.png" />
         </div>
         </Col>
       </Row>
      <Row>
      <Col>
        <div className="image-container">
          <img src="https://felswebsite.s3.amazonaws.com/ephemerav2.png" />
        </div>
        </Col>
        <Col>
        <div className="image-container">
          <img src="https://felswebsite.s3.amazonaws.com/yfashcover.png" />
        </div>
        </Col>
        <Col>
        <div className="image-container">
          <img src="https://felswebsite.s3.amazonaws.com/thinkspacesposter.png" />
        </div>
        </Col>
     </Row>
      </div>
    );
  }
}

export default Posters;
