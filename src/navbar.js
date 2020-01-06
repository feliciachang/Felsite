import React, { Component } from "react";
import { NavLink as RRNavLink } from 'react-router-dom';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from "reactstrap";

class NavbarComp extends Component {
  render(){
    return(
      <Navbar>
        <NavbarBrand href="/" style={{fontSize: 40, color: "#f88379"}}>{"//"}
        </NavbarBrand>
        <Nav>
        <NavItem active={window.location.pathname === "/aboutme"}>
        <NavLink style={{ color: "#f88379", fontSize: 16}} href="/aboutme">ABOUT</NavLink>
        </NavItem>
          <NavItem>
          <NavLink style={{ color: "#f88379", fontSize: 16}} href="https://felswebsite.s3.amazonaws.com/FeliciaChangCV_2020.pdf">CV</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default NavbarComp;
