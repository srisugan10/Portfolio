import React from "react";

import {
  Row,
  Col,
  Card,
  ProgressBar,
  Container,
  NavLink,
} from "react-bootstrap";
import { SiCodeigniter } from "react-icons/si";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { SiReactquery } from "react-icons/si";
import { SiRetool } from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { GiSandsOfTime } from "react-icons/gi";
import { GiBookmarklet } from "react-icons/gi";
import { PiStudentFill } from "react-icons/pi";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { LiaAws } from "react-icons/lia";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
function About() {
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

      <div className="background">
        <Row className="skill">
          <Col md={5}>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <h1 className="skili">
              <SiCodeigniter />
              &nbsp;Skills
            </h1>
          </Col>
          <Col md={7}></Col>
        </Row>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <br />
            <br />
            <Card>
              <Row>
                <Col md={4}></Col>
                <Col md={5}>
                  <h2 className="colori">
                    <SiRetool /> Technical Skills
                  </h2>
                </Col>
                <Col md={2}></Col>
              </Row>
              <br />
              <Row>
                <Col md={2}></Col>
                <Col md={2}>
                  <h3 className="color1">
                    <FaHtml5 />
                  </h3>
                </Col>
                <Col md={6}>
                  <h3 className="barr">
                    <ProgressBar
                      striped
                      variant="success"
                      now={97}
                    ></ProgressBar>
                  </h3>
                </Col>

                <Col md={2}></Col>
              </Row>
              <br />
              <Row>
                <Col md={2}></Col>
                <Col md={2}>
                  {" "}
                  <h3 className="color1">
                    <FaCss3Alt />
                  </h3>
                </Col>
                <Col md={6}>
                  <h3 className="barr">
                    <ProgressBar
                      striped
                      variant="success"
                      now={96}
                    ></ProgressBar>
                  </h3>
                </Col>
                <Col md={2}></Col>
              </Row>
              <br />

              <Row>
                <Col md={2}></Col>
                <Col md={2}>
                  <h3 className="color1">
                    <FaBootstrap />
                  </h3>
                </Col>
                <Col md={6}>
                  <h3 className="barr">
                    <ProgressBar
                      striped
                      variant="success"
                      now={89}
                    ></ProgressBar>
                  </h3>
                </Col>
                <Col md={2}></Col>
              </Row>
              <br />

              <Row>
                <Col md={2}></Col>
                <Col md={2}>
                  <h3 className="color1">
                    <IoLogoJavascript />
                  </h3>
                </Col>

                <Col md={6}>
                  <h3 className="barr">
                    <ProgressBar
                      striped
                      variant="success"
                      now={89}
                    ></ProgressBar>
                  </h3>
                  <br />
                  <Row>
                    <Col md={1}></Col>
                    <Col md={1}>
                      <h6>
                        <MdArrowRight />
                      </h6>
                    </Col>
                    <Col md={8}>
                      <h6>
                        Calculator
                        <Link
                          style={{ textDecoration: `none`, color: `black` }}
                          to={"/Cal"}
                        >
                          (click here)
                        </Link>
                      </h6>
                    </Col>
                    <Col md={2}></Col>
                  </Row>

                  <Row>
                    <Col md={1}></Col>
                    <Col md={1}>
                      <h6>
                        <MdArrowRight />
                      </h6>
                    </Col>
                    <Col md={9}>
                      <h6>
                        Age Calculator
                        <Link
                          style={{ textDecoration: `none`, color: `black` }}
                          to={"/age"}
                        >
                          (click here)
                        </Link>
                      </h6>
                    </Col>
                    <Col md={2}></Col>
                  </Row>
                </Col>
                <Col md={2}></Col>
              </Row>
              <br />

              <Row>
                <Col md={2}></Col>
                <Col md={2}>
                  <h3 className="color1">
                    <SiReactquery />
                  </h3>
                </Col>
                <Col md={6}>
                  <h3 className="barr">
                    <ProgressBar
                      striped
                      variant="success"
                      now={89}
                    ></ProgressBar>
                  </h3>
                  <br/>
                  <Row>
                    <Col md={1}></Col>
                    <Col md={1}>
                      <h6>
                        <MdArrowRight />
                      </h6>
                    </Col>
                    <Col md={9}>
                      <h6>
                        Todo
                        <Link
                          style={{ textDecoration: `none`, color: `black` }}
                          to={"/todo"}
                        >
                          (click here)
                        </Link>
                      </h6>
                    </Col>
                    <Col md={2}></Col>
                  </Row>
                  <Row>
                    <Col md={1}></Col>
                    <Col md={1}>
                      <h6>
                        <MdArrowRight />
                      </h6>
                    </Col>
                    <Col md={9}>
                      <h6>
                        Ecommerce
                        <Link
                          style={{ textDecoration: `none`, color: `black` }}
                          to={"/login"}
                        >
                          (click here)
                        </Link>
                      </h6>
                    </Col>
                    <Col md={2}></Col>
                  </Row>
                </Col>
                <Col md={2}></Col>
              </Row>
              <br />
              <Row>
                <Col md={2}></Col>
                <Col md={2}>
                  <h3 className="color1">
                  <LiaAws />
                  </h3>
                </Col>
                <Col md={6}>
                  <h3 className="barr">
                    <ProgressBar
                      striped
                      variant="success"
                      now={80}
                    ></ProgressBar>
                  </h3><br/>
                  <Row>
                    <Col md={1}></Col>
                    <Col md={1}>
                      <h6>
                        <MdArrowRight />
                      </h6>
                    </Col>
                    <Col md={9}>
                      <h6>
                      AWS Account Creation
                      </h6>
                    </Col>
                    <Col md={2}></Col>
                  </Row>
                  <Row>
                    <Col md={1}></Col>
                    <Col md={1}>
                      <h6>
                        <MdArrowRight />
                      </h6>
                    </Col>
                    <Col md={9}>
                      <h6>
                      Server Management
                      </h6>
                    </Col>
                    <Col md={2}></Col>
                  </Row>
                  <Row>
                    <Col md={1}></Col>
                    <Col md={1}>
                      <h6>
                        <MdArrowRight />
                      </h6>
                    </Col>
                    <Col md={9}>
                      <h6>
                      Web Hosting
                      </h6>
                    </Col>
                    <Col md={2}></Col>
                  </Row>
                  <Row>
                    <Col md={1}></Col>
                    <Col md={1}>
                      <h6>
                        <MdArrowRight />
                      </h6>
                    </Col>
                    <Col md={9}>
                      <h6>
                      Multiple Server Management
                      </h6>
                    </Col>
                    <Col md={2}></Col>
                  </Row>
                </Col>
                <Col md={2}></Col>
              </Row>
              <br />
              <Row>
                <Col md={2}></Col>
                <Col md={2}>
                  <h3 className="color1">
                  <SiMongodb />
                  </h3>
                </Col>
                <Col md={6}>
                  <h3 className="barr">
                    <ProgressBar
                      striped
                      variant="success"
                      now={65}
                    ></ProgressBar>
                  </h3>
                </Col>
                <Col md={2}></Col>
              </Row>
              <br />
              <Row>
                <Col md={2}></Col>
                <Col md={2}>
                  <h3 className="color1">
                  <FaNodeJs />
                  </h3>
                </Col>
                <Col md={6}>
                  <h3 className="barr">
                    <ProgressBar
                      striped
                      variant="success"
                      now={70}
                    ></ProgressBar>
                  </h3>
                </Col>
                <Col md={2}></Col>
              </Row>
              <br />
            </Card>
          </Col>
          <Col md={3}></Col>
        </Row>
        <div>
          <Row className="skill">
            <Col md={5}>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <h1 className="skil">
                <FaGraduationCap />
                &nbsp;Education
              </h1>
            </Col>
            <Col md={7}></Col>
          </Row>
        </div>
        <br />
        <br />
        <div>
          <Row>
            <Col md={2}></Col>
            <Col md={3}>
              <Card>
                <br />
                <h2 style={{ textAlign: `center` }}>
                  {" "}
                  <FaBookReader />
                </h2>
                <br />
                <h2 style={{ textAlign: `center` }}>SSLC</h2>
                <div>
                  <PiStudentFill /> Instution: Government higher secondary
                  school
                  <br />
                  <FaMagnifyingGlassLocation /> Location: Coimbatore
                  <br />
                  <GiSandsOfTime /> Duration:2015-2016
                  <br />
                  <GiBookmarklet /> Percentage:85%
                </div>
                <br />
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <br />
                <h2 style={{ textAlign: `center` }}>
                  <FaBookReader />
                </h2>
                <br />
                <h2 style={{ textAlign: `center` }}>HSC</h2>
                <div>
                  <PiStudentFill /> Instution: Government higher secondary
                  school
                  <br />
                  <FaMagnifyingGlassLocation /> Location: Coimbatore
                  <br />
                  <GiSandsOfTime /> Duration:2016-2018
                  <br />
                  <GiBookmarklet /> Percentage:79%
                </div>
                <br />
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <br />
                <h2 style={{ textAlign: `center` }}>
                  <FaBookReader />
                </h2>
                <br />
                <h2 style={{ textAlign: `center` }}>UG</h2>
                <div>
                  <PiStudentFill /> Instution: Akshaya College of Engineering
                  and Technology
                  <br />
                  <FaMagnifyingGlassLocation /> Location: Coimbatore
                  <br />
                  <GiSandsOfTime /> Duration:2018-2022
                  <br />
                  <GiBookmarklet /> Percentage:76%
                </div>
                <br />
              </Card>
            </Col>
            <Col md={1}></Col>
          </Row>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}
export default About;
