import React, {Component} from 'react';

var divStyle = {
    margin: "50px"
}
var bodyStyle = {
    margin: "80px"
}

class AboutMe extends Component {
  render() {
    return (
      <div style = {divStyle}>
        <header >
            <h1>{"// Felicia Chang "}</h1>
        </header>
        <p style = {bodyStyle}>
            {"int main (About me) {"}
            <br></br>
            &emsp; {"while ( Felicia is at Yale University ) {"}
            <br></br>
            &emsp;&emsp;&emsp; {"she studies in Computer Science;"}
            <br></br>
            &emsp;&emsp;&emsp; {"enjoys working on cool web projects;"}
            <br></br>
            &emsp;&emsp;&emsp; {"is interested in product management;"}
            <br></br>
            &emsp;&emsp;&emsp; {"and intersections between tech and art;"}
            <br></br>
            &emsp;&emsp;&emsp; {"plays on the varsity golf team;"}
            <br></br>
            &emsp;&emsp;&emsp; {"eats a lot of bell peppers;"}
            <br></br>
            &emsp;{"}"}
            <br></br>
            <br></br>
            &emsp;{"for ( Felicia = present, Felicia < old age, ++ Felicia) {"}
            <br></br>
            &emsp;&emsp;&emsp;{"you may contact her at:"}
            <br></br>
            &emsp;&emsp;&emsp;{"return("}
            <a href = "mailto:felicia.chang@yale.edu"> felicia.chang@yale.edu </a>
            {");"}
            <br></br>
            <br></br>
            &emsp;{"if (you would like to check out some of her work) {"}
            <br></br>
            &emsp;&emsp;&emsp;{"scroll on down;"}
            <br></br>
            &emsp;{"}"}
            <br></br>
            {"}"}
            <br></br>
        </p>
        <hr></hr>
      </div>
    );
  }
}

export default AboutMe;
