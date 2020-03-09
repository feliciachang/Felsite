import React, { Component } from "react";
import { NavLink as RRNavLink } from 'react-router-dom';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from "reactstrap";

class NavbarComp extends Component {
  render(){
    return(
      <Navbar style={{ marginRight:"2%"}}>
        <NavbarBrand href="/" style={{marginLeft: "4%", color: "#000000"}}>{"Felicia Chang"}
        </NavbarBrand>
        <Nav>
        <NavItem active={window.location.pathname === "/aboutme"}>
        <NavLink style={{ color: "#000000" }} href="/aboutme">About</NavLink>
        </NavItem>
          <NavItem>
          <NavLink style={{ color: "#000000"}} href="https://felswebsite.s3.amazonaws.com/FeliciaChangCV.pdf">CV</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default NavbarComp;
