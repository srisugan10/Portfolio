import React from "react";
import { Button, NavLink, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Project() {
  return (
    <div>
      <div>
        <Row className="flex">
          <Col md={4}>
            <h1 className="nav">Portfolio</h1>
          </Col>
          <Col md={2}>
            <NavLink href="/home">
              <h2 className="home">Home</h2>
            </NavLink>
          </Col>
          <Col md={2}>
            <NavLink href="/about">
              <h2 className="about">About</h2>
            </NavLink>
          </Col>
          <Col md={2}>
            <NavLink href="/project">
              <h2 className="project">Project</h2>
            </NavLink>
          </Col>
          <Col md={2}>
            <NavLink href="/contact">
              <h2 className="edu">Contact</h2>
            </NavLink>
          </Col>
        </Row>
      </div>

      <div>
        
      </div>
      <Row>
      <Col  md={3}>
   <div className="book">
    <Link style={{textDecoration:`none`,color:`#F6692D`}} to="/Cal">
         Calculator
        </Link>
    <div className="cover">
        <p>Hover Me</p>
    </div>
   </div></Col>

   <Col md={3}>
    <div className="book">
    <Link style={{textDecoration:`none`,color:`#F6692D`}} to="/age">
         Age
        </Link>
    <div className="cover">
        <p>Hover Me</p>
    </div>
   </div>
   </Col>

        <Col md={3}>
      <div className="book">
      <Link style={{textDecoration:`none`,color:`#F6692D`}} to={"/todo"}>
          Todo
        </Link>
    <div className="cover">
        <p>Hover Me</p>
    </div>
   </div>
   </Col>
   <Col md={3}>
      <div className="book">
      <Link  style={{textDecoration:`none`,color:`#F6692D`}} to={"/login"}>
          Ecommerce
        </Link>
    <div className="cover">
        <p>Hover Me</p>
    </div>
   </div>
   </Col>
   
   </Row>
    </div>
  );
}

export default Project;
