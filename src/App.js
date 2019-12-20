import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from "reactstrap";
import "./App.css";
import "./index.css";

import AboutMe2 from "./home/home2";
import Web from "./web/web";
import ThinkspacesCard from "./web/thinkspaces/thinkspaces-card";
import ConservifyCard from "./web/conservify-card/conservify-card";
import WeiboCard from "./web/weibo-card/weibo-card";
import SineQuaNonPage from "./web/sinequanon/sinequanon";

var divStyle = {
  margin: "50px"
};
var bodyStyle = {
  margin: "80px"
};

class App extends Component {
  render() {
    return (
      <div style = {{marginLeft: "5%", marginRight:"5%"}}>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap" />
        <link
          href="https://fonts.googleapis.com/css?family=Amiri|Goudy+Bookletter+1911&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans|Open+Sans&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Work+Sans&display=swap" rel="stylesheet"/>
        <div style={{margin: "0%"}}> </div>
        <Navbar>
          <NavbarBrand href="/" style={{fontSize: 40, color: "#ff6e6e"}}>{"//"}
          </NavbarBrand>
          <Nav>
          <NavItem>
          <NavLink style={{ color: "#ff6e6e"}}>WORK</NavLink>
          </NavItem>
            <NavItem>
            <NavLink style={{ color: "#ff6e6e"}} href="https://felswebsite.s3.amazonaws.com/FeliciaChangCV.pdf">CV</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <Router>
          <Route path="/" exact component={Web}/>
          <Route path="/thinkspaces" exact component={ThinkspacesCard}/>
          <Route path="/conservify" exact component={ConservifyCard}/>
          <Route path="/weibo" exact component={WeiboCard}/>
          <Route path="/sinequanon" exact component={SineQuaNonPage}/>
        </Router>
      </div>
    );
  }
}

export default App;
