import React from 'react'
import { NavLink } from 'react-router-dom';
import { Container, Row, Col  } from 'react-bootstrap';


export default function Header() {
  return (
    <>
        <Container fluid>
          <Row>
        
          <Col xs={12} sm={12} xl={7} lg={7} md={7} className="p-0">
            <nav className="navbar navbar-expand-lg bg-dark">
              <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item ">
                      <NavLink className="nav-link active text-light" aria-current="page" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link active text-light" aria-current="page" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link text-light" to="/services">Services</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link text-light" to="/instrumentals">Instrumentals</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link text-light" to="/contact">Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            </Col>
            <Col xs={12} sm={12} xl={5} lg={5} md={5} className="p-0">
            <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container">
            <NavLink className="navbar-brand" to={'/sign-in'}>
            </NavLink>
            <div className="" id="navbarTogglerDemo02">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="text-light nav-link" to={'/sign-in'}>
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="text-light nav-link" to={'/sign-up'}>
                    Sign up
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
          </Col>
          </Row>
      </Container>

    </>
  )
}
