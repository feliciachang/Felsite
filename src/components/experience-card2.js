import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import "./experience-card.css";
import { useMediaQuery } from 'react-responsive'
import { BrowserRouter as Router, Switch, Route, Link, useHistory, withRouter } from 'react-router-dom';

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
  componentDidUpdate() {
    if(window.innerWidth < 600) {
      this.setState({mobile: true})
    }
  }

  redirectToProject = () => {
    console.log("pressed");
    const {history, url} = this.props;
    if(history) history.push(url);
  }

  render() {
    const {
      mainPhoto,
      url,
      history
    } = this.props;
      return(
        <div onClick = {this.redirectToProject}>
        <div>{mainPhoto}</div>
        </div>
      )
    }
}
export default withRouter(ExperienceCard2);
