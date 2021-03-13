import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import "./App.css";
import "./index.css";
import ReactGA from "react-ga";

import NavbarComp from "./navbar.js";

import AboutMe from "./home/home";
import AboutMe2 from "./home/home2";
import Web from "./web/web2";
import ThinkspacesCard from "./web/thinkspaces/thinkspaces-card";
import YERCard from "./web/yer/yer";
import ConservifyCard from "./web/conservify-card/conservify-card";
import WeiboCard from "./web/weibo-card/weibo-card";
import SineQuaNonPage from "./web/sinequanon/sinequanon";
import LuxPage from "./web/luxetveritas/luxetveritas";
import ReactiveLamp from "./web/ReactiveLamp/ReactiveLamp";
import FlossbankPage from "./web/flossbank/flossbank";
import InternetCard from "./web/internet_child/internet_child";
import WaterCard from "./web/water/water";
import RedLineCard from "./web/redline/redline";
import PoliticCard from "./web/politic/politic";

import ScrollToTop from "./web/ScrollToTop";

var divStyle = {
  margin: "50px",
};
var bodyStyle = {
  margin: "80px",
};

ReactGA.initialize("UA-148340396-1");
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  render() {
    return (
      <div style={{ marginLeft: "5%", marginRight: "5%" }}>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap" />
        <link
          href="https://fonts.googleapis.com/css?family=Amiri|Goudy+Bookletter+1911&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans|Open+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans&display=swap"
          rel="stylesheet"
        />
        <div style={{ margin: "0%" }}> </div>
        <NavbarComp />
        <Router>
          <ScrollToTop />
          <Route path="/" exact component={Web} />
          <Route path="/aboutme" exact component={AboutMe} />
          <Route path="/thinkspaces" exact component={ThinkspacesCard} />
          <Route path="/yer" exact component={YERCard} />
          <Route path="/conservify" exact component={ConservifyCard} />
          <Route path="/weibo" exact component={WeiboCard} />
          <Route path="/sinequanon" exact component={SineQuaNonPage} />
          <Route path="/luxetveritas" exact component={LuxPage} />
          <Route path="/reactivelamp" exact component={ReactiveLamp} />
          <Route path="/flossbank" exact component={FlossbankPage} />
          <Route path="/internetchild" exact component={InternetCard} />
          <Route path="/materialstudy" exact component={WaterCard} />
          <Route path="/processing2020" exact component={RedLineCard} />
          <Route path="/politic" exact component={PoliticCard} />
        </Router>
      </div>
    );
  }
}

export default App;
