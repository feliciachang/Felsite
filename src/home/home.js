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
    compile: false,
    mobile: false
  };

  componentDidMount() {
    if (window.innerWidth < 600) {
      this.setState({mobile: true})
    }
  }

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
                &emsp;&emsp;&emsp; {"is interested in;"}
                <br />
                &emsp;&emsp;&emsp; {"human computer interaction;"}
                <br />
                &emsp;&emsp;&emsp; {"is often working at the intersection;"}
                <br />
                &emsp;&emsp;&emsp; {"of engineering and design;"}
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
                &emsp;&emsp;&emsp;{"or if you're tired of this website;"}
                <br />
                &emsp;&emsp;&emsp;{"find me on"}
                <a href="https://www.linkedin.com/in/felicia-chang-20666112a/">
                  {" "}
                  LinkedIn{" "}
                </a>
                ,<a href="https://github.com/feliciachang"> Github </a>, or
                <a href="https://twitter.com/felchang"> Twitter </a>
                <br />
                &emsp;{"}"}
                <br />
                {"}"}
                <br />
              </p>
            </Col>
            { this.state.mobile ?
              <div/>
              :
            (<Col>
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
            </Col>)
            }
          </Row>
        </div>
      </div>
    );
  }
}

export default AboutMe;
