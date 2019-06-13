import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./home.css";

var divStyle = {
  marginTop: 50,
  paddingLeft: "10%"
};
var bodyStyle = {
  margin: "80px"
};

const TogglePhoto = show => {
  console.log(show);
  if (show) {
    return <img src="https://felswebsite.s3.amazonaws.com/IMG_2949.GIF" />;
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
      <div style={divStyle}>
        <header>
          <h1>{"// Felicia Chang "}</h1>
        </header>
        <Row>
          <Col>
            <p style={bodyStyle}>
              {"int main (About me) {"}
              <br />
              &emsp; {"while ( Felicia is at Yale University ) {"}
              <br />
              &emsp;&emsp;&emsp; {"she studies in Computer Science;"}
              <br />
              &emsp;&emsp;&emsp; {"enjoys working on cool web projects;"}
              <br />
              &emsp;&emsp;&emsp; {"is interested in product management;"}
              <br />
              &emsp;&emsp;&emsp; {"and intersections between tech and art;"}
              <br />
              &emsp;&emsp;&emsp; {"plays on the varsity golf team;"}
              <br />
              &emsp;&emsp;&emsp; {"eats a lot of bell peppers;"}
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
            </p>
            <div
              className="compile-button"
              onClick={() => {
                this.setState({ compile: !this.state.compile });
              }}
            >
              Compile Me
            </div>
          </Col>
          <Col>
            {this.state.compile ? (
              <div className="image-container">
                <img src="https://felswebsite.s3.amazonaws.com/IMG_2949.GIF" />
              </div>
            ) : (
              <div />
            )}
          </Col>
        </Row>
        <hr />
      </div>
    );
  }
}

export default AboutMe;
