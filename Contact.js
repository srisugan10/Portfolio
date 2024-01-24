import React from 'react'
import { Row, Col, Card, Form, Button, NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiFileImageFill } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FcContacts } from "react-icons/fc";

function Contact() {
    return (
        <div>
             <div >
        <Row className='flex'>
          <Col md={4}>
            <h1 className='nav'>Portfolio</h1>
          </Col>
          <Col md={2} >
            <NavLink href='/home'><h2 className='home'>Home</h2></NavLink>
          </Col>
          <Col md={2} >
            <NavLink href="/about"><h2 className='about'>About</h2></NavLink>
          </Col>
          <Col md={2} >
            <NavLink href='/project'><h2 className='project'>Project</h2></NavLink>
          </Col>
          <Col md={2} >
            <NavLink href='/contact'><h2 className='edu'>Contact</h2></NavLink>
          </Col>
        </Row>
      </div>
        <div  className='background'>
            <Row>
                <Col md={2}></Col>
                <Col md={8}><h1 className='con'><FcContacts />&nbsp;Contact</h1></Col>
                <Col md={2}></Col>
            </Row><br/><br/>
                <Row>
                    <Col md={2}></Col>
                    <Col md={4}>
                        <Card>
                            <Row>
                                &nbsp;
                                <h3>Contact Info</h3>
                            </Row>
                            <Row>
                                <Col md={2}></Col>
                                <Col md={8}>
                                   <h6 style={{fontSize:`16px`,fontWeight:`bold`}}> <RiFileImageFill /> &nbsp;Coimbatore</h6>
                                </Col>
                                <Col md={2}></Col>
                            </Row>
                            <Row>
                                <Col md={2}></Col>
                                <Col md={10}>
                                  <h6 style={{fontSize:`16px`,fontWeight:`bold`}}>  <RiFileImageFill /> &nbsp;suganthiparamasivam10@gmail.com</h6>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col md={2}></Col>
                                <Col md={8}>
                                  <h6 style={{fontSize:`16px`,fontWeight:`bold`}}>  <RiFileImageFill /> &nbsp;638-293-2416</h6>
                                </Col>
                                <Col md={2}></Col>
                            </Row>
                            <br /><br /><br />
                            <Row>
                                <Col md={2}></Col>
                                <Col md={8}>
                                &nbsp;&nbsp;&nbsp;&nbsp;   
                                <Button  className='btn1' href='https://instagram.com/s_r_i_s_u_g_a_n_10?igshid=OGQ5ZDc2ODk2ZA=='>
                                    <FaSquareInstagram />
                                    </Button>&nbsp;
                                    <Button className='btn1'>
                                        <FaGithub />
                                        </Button>&nbsp;
                                    <Button className='btn1' href='https://www.linkedin.com/in/suganthi-paramasivam-a52a74249/'>
                                        <FaLinkedin />
                                    </Button>
                                    </Col>
                                <Col md={2}></Col>
                            </Row><br/><br/><br/>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <h3 className='send'>Send a message</h3><br />
                            <Row>
                                <Col md={2}></Col>
                                <Col md={4}>
                                    <Form>
                                        <Form.Control type='text' placeholder='First Name' />
                                    </Form>
                                </Col>
                                <Col md={4}>
                                    <Form>
                                        <Form.Control type='text' placeholder='Last Name' />
                                    </Form>
                                </Col>
                                <Col md={2}></Col>
                            </Row><br />
                            <Row>
                                <Col md={2}></Col>
                                <Col md={4}>
                                    <Form>
                                        <Form.Control type='email' placeholder='Email Address' />
                                    </Form>
                                </Col>
                                <Col md={4}>
                                    <Form>
                                        <Form.Control type='text' placeholder='Mobile Number' />
                                    </Form>
                                </Col>
                                <Col md={2}></Col>
                            </Row><br/>
                            <Row>
                                <Col md={2}></Col>
                                <Col md={8}>
                                    <Form.Control type='text' placeholder='Write a message' />
                                </Col>
                                <Col md={2}></Col>
                            </Row><br/>
                           <Row> 
                                <Col md={4}></Col>
                                <Col md={4}>
                                    <Button className='btn1' type='submit'>Send</Button> 
                                </Col>
                                <Col md={4}></Col>
                            </Row>&nbsp;
                        </Card>
                    </Col>
                    <Col md={2}></Col>
                </Row>
         
        </div>
        </div>
    )
}

export default Contact