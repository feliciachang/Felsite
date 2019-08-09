import React, { Component } from "react";
import "./App.css";
import "./index.css";

import AboutMe from "./home/home";
import Web from "./web/web";
import Art from "./art/art";
import Experience from "./experience/experience";
import Education from "./education/education";
import Contents from "./contents/contents";
import PersonalWork from "./personal-work/personal-work";

var divStyle = {
  margin: "50px"
};
var bodyStyle = {
  margin: "80px"
};

class App extends Component {
  render() {
    return (
      <div>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap" />
        <link
          href="https://fonts.googleapis.com/css?family=Amiri|Goudy+Bookletter+1911&display=swap"
          rel="stylesheet"
        />
        <AboutMe />
        <hr style={{ marginRight: 40, marginLeft: 40 }} />
        <Web />
        <PersonalWork />
      </div>
    );
  }
}

export default App;
