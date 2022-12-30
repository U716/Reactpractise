import React from 'react'
import { Container, Row} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {useNavigate} from "react-router-dom"
 

export default function Login() {
  const navigate =useNavigate()
    return (
        <>
        <Container className='mt-5 '>
            <Row>
                <div className='pt-5 py-5 rounded w-50 m-auto bg-light'>
            <form>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={()=>{navigate('/Home')}}>
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <NavLink to="/signup">password?</NavLink>
        </p>
      </form>
      </div>
            </Row>
        </Container>
        </>
    )
}