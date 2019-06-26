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

class AboutMe extends Component {
  state = {
    compile: false
  };

  render() {
    console.log(this.state.compile);
    return (
      <div style={{ margin: 40 }}>
        <h1 style={{ color: "#ff6e6e", fontWeight: "bold", fontSize: 50 }}>
          {"// Felicia Chang "}
        </h1>
        <div style={divStyle}>
          <Row>
            <Col>
              <p style={{ paddingTop: 60 }}>
                {"int main (About me) {"}
                <br />
                &emsp; {"while ( Felicia is at Yale University ) {"}
                <br />
                &emsp;&emsp;&emsp; {"she studies Computer Science;"}
                <br />
                &emsp;&emsp;&emsp; {"with interests in the intersections;"}
                <br />
                &emsp;&emsp;&emsp; {"between tech, society and art;"}
                <br />
                &emsp;&emsp;&emsp; {"is always working on side projects;"}
                <br />
                &emsp;&emsp;&emsp;{" "}
                {"and front projects; //she's not very funny"}
                <br />
                &emsp;&emsp;&emsp; {"plays on the varsity golf team;"}
                <br />
                &emsp;&emsp;&emsp; {"and eats a lot of bell peppers;"}
                <br />
                &emsp;{"}"}
                <br />
                <br />
                &emsp;
                {"for ( Felicia = present, Felicia < old age, ++ Felicia) {"}
                <br />
                &emsp;&emsp;&emsp;{"you may contact her at:"}
                <br />
                &emsp;&emsp;&emsp;{"return("}
                <a href="mailto:felicia.chang@yale.edu">
                  {" "}
                  felicia.chang@yale.edu{" "}
                </a>
                {");"}
                <br />
                &emsp;{"}"}
                <br />
                <br />
                &emsp;{"if (you would like to check out some of her work) {"}
                <br />
                &emsp;&emsp;&emsp;{"scroll on down;"}
                <br />
                &emsp;{"}"}
                <br />
                {"}"}
                <br />
              </p>
            </Col>
            <Col>
              {this.state.compile ? (
                <div className="image-container">
                  <img src="https://felswebsite.s3.amazonaws.com/IMG_2949.GIF" />
                </div>
              ) : (
                <div
                  className="compile-button"
                  onClick={() => {
                    this.setState({ compile: !this.state.compile });
                  }}
                >
                  Compile Felicia
                </div>
              )}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default AboutMe;
