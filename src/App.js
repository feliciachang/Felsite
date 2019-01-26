import React, { Component } from 'react';
import './App.css';

import AboutMe from './home/home';
import Web from './web/web';
import Art from './art/art';
import Experience from './experience/experience';
import Education from './education/education'

var divStyle = {
    margin: "50px"
}
var bodyStyle = {
    margin: "80px"
}

class App extends Component {
  render() {
    return (
      <div>
        <AboutMe/>
        <Web/>
        <Art/>
        <Experience/>
        <Education/>
      </div>
  )};
}

export default App;
