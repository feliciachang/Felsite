import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import "./experience-card.css";
import { useMediaQuery } from 'react-responsive'

// <div
//   style={{ marginRight: "20%", marginLeft: "20%", marginTop: 40 }}
// >

// <div>
// <div
//   style={{
//     justifyContent: "space-between",
//     paddingTop: 20,
//     paddingBottom: 20
//   }}
// >
//   <Row>
//     <Col xs="8">
//       <div>{mainPhoto}</div>
//     </Col>
//     <Col xs="3">
//       <div className="vertical-center">
//         <Row>
//           <h3> {name} </h3>
//         </Row>
//         <Row>{date}</Row>
//         <Row>{position}</Row>
//         <br />
//         <Row>
//           <div
//             className="expand-button"
//             onClick={() => {
//               this.setState({ photoDisplay: !this.state.photoDisplay });
//             }}
//           >
//             {" "}
//             Read More{" "}
//           </div>
//         </Row>
//       </div>
//     </Col>
//   </Row>
//   {this.state.photoDisplay ? (
//     <div>
//       <div
//         style={{ marginRight: "20%", marginLeft: "20%", marginTop: 40 }}
//       >
//         Tools: {tools}
//         <br />
//         <br />
//         {graph1}
//         <br />
//         <br />
//         {graph2}
//         <br />
//         <br />
//         {graph3}
//       </div>
//       {graphics}
//       <br/>
//       <br/>
//     </div>
//   ) : (
//     <div />
//   )}
// </div>
// </div>

class ExperienceCard2 extends Component {
  state = {
    photoDisplay: false,
    mobile: false
  };

  componentDidMount() {
    if(window.innerWidth < 600) {
      this.setState({mobile: true})
    }
  }


  render() {
    const {
      name,
      date,
      position,
      tools,
      graph1,
      graph2,
      graph3,
      graphics,
      mainPhoto,
      button
    } = this.props;

    if(this.state.mobile) {
      return(
        <div>
        <div>{mainPhoto}</div>
        <div style = {{textAlign: "center"}}>
          <h3> {name} </h3>
          <p>{date}</p>
          <p>
          {position}
          </p>
          <div style= {{display: "inline-block"}}>
          <div
            className="expand-button"
            onClick={() => {
              this.setState({ photoDisplay: !this.state.photoDisplay });
            }}
          >
            {" "}
            Read More{" "}
          </div>
          </div>
        </div>
        <br/>
        {this.state.photoDisplay ? (
          <div>
            <div style = {{marginLeft: 10, marginRight: 10}}>
              Tools: {tools}
              <br />
              <br />
              {graph1}
              <br />
              <br />
              {graph2}
              <br />
              <br />
              {graph3}
            </div>
            {graphics}
            <br/>
            <br/>
          </div>
        ) : (
          <div />
        )}
        </div>
      )
    }
    else {
      return(
        <div
          style={{
            justifyContent: "space-between",
            paddingTop: 20,
            paddingBottom: 20
          }}
        >
          <Row>
            <Col xs="8">
              <div>{mainPhoto}</div>
            </Col>
            <Col xs="3">
              <div className="vertical-center">
                <Row>
                  <h3> {name} </h3>
                </Row>
                <Row>{date}</Row>
                <Row>{position}</Row>
                <br />
                <Row>
                  <div
                    className="expand-button"
                    onClick={() => {
                      this.setState({ photoDisplay: !this.state.photoDisplay });
                    }}
                  >
                    {" "}
                    Read More{" "}
                  </div>
                </Row>
              </div>
            </Col>
          </Row>
          {this.state.photoDisplay ? (
            <div>
              <div style = {{marginLeft: "20%", marginRight: "20%", paddingTop: 40}} >
                Tools: {tools}
                <br />
                <br />
                {graph1}
                <br />
                <br />
                {graph2}
                <br />
                <br />
                {graph3}
              </div>
              {graphics}
              <br/>
              <br/>
            </div>
          ) : (
            <div />
          )}
        </div>
      )
    }
  }
}
export default ExperienceCard2;
