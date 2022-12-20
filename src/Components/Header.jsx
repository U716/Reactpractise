import React from 'react'
import { NavLink } from 'react-router-dom';
import { Container, Row, Col  } from 'react-bootstrap';


export default function Header() {
  return (
    <>
        <Container fluid>
          <Row>
            <Col xs={12} sm={12} xl={5} lg={5} md={5} className="p-0">
            <nav className="navbar bg-dark">
              <div className="container-fluid">
                <a className="navbar-brand text-light w-25 h-25" href="#">
                  <NavLink to="/home" className='text-decoration-none text-light'>Testing World</NavLink>
                </a>
              </div>
            </nav>
          </Col>
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
          </Row>
      </Container>

    </>
  )
}
