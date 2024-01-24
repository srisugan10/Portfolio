import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Col, Button, Row, NavLink } from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";
import gif_11 from '../images/gif_11.gif'
function Home() {
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
        <div className='background'>
            <Row>
                <Col md={6}>
                    <br />
                    <p className='letter'>
                        Hi, I'm Suganthi
                        </p>
                    <p className='word'>I am a Fullstack Developer &<br />Web Designer.</p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button className='btn1'>Download Cv</Button><br /><br /><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button  className='btn1' href='https://instagram.com/s_r_i_s_u_g_a_n_10?igshid=OGQ5ZDc2ODk2ZA=='>
                        <FaInstagramSquare />
                    </Button>&nbsp;&nbsp;&nbsp;&nbsp; 
                    <Button className='btn1'>
                        <FaGithub />
                        </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button className='btn1' href='https://www.linkedin.com/in/suganthi-paramasivam-a52a74249/'>
                        <FaLinkedin />
                    </Button>
                </Col>
                <Col md={6}>
                   <img className='img' src={gif_11}/>
                </Col>
            </Row>
        </div>
        </div>
    )
}
export default Home