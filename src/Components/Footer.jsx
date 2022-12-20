import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { Container, Row, Col  } from 'react-bootstrap';


export default function Footer() {
    return (
        <section className='footer'>
            <Container>
                <div >
                    <ul>
                        <li>
                            <NavLink to="/home" className="nav-item nav-link active">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="nav-item nav-link">About</NavLink>

                        </li>
                        <li>
                            <NavLink to="/services" className="nav-item nav-link">services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/instrumentals" className="nav-item nav-link">Instrumentals</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="social-media ">
                    <NavLink className='text-light' to="#"><FaFacebook /></NavLink>
                    <NavLink className='text-light' to="#"><FaInstagram /></NavLink>
                    <NavLink className='text-light' to="#"><FaLinkedinIn /></NavLink>
                    <NavLink className='text-light' to="#"><FaPinterest /></NavLink>

                </div>

                <div className="copyrights">
                    <Container fluid>
                        <Row>
                            <Col xs={12} lg={4} xl={4} sm={12} md={4} className='text-center pb-3'>
                                <h6>© Loep.pro/ 2021. All rights reserved</h6>
                            </Col>
                            <Col xs={12} lg={4} xl={4} sm={12} md={4} className='text-center pb-3'></Col>
                            <Col xs={12} lg={4} xl={4} sm={12} md={4} className='text-center pb-3'>
                                <h6> Design and Developed by Cydomedia</h6>
                            </Col>
                        </Row>
                    </Container>

                </div>
            </Container>
        </section>
    )
}
