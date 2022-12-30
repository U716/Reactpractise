import React, {useState, setState} from 'react'
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"
import {database} from '../firebase'
import {ref,push,child,update} from "firebase/database";


export default function SignUp() {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }


  }
  

  const handleSubmit = async (e)  => {
    e.preventDefault()
    setTimeout(() => {
      document.location.reload();
    }, 1000);
    let obj = {
      firstName : firstName,
      lastName:lastName,
      email:email,
      password:password,
  }       
const newPostKey = push(child(ref(database), 'posts')).key;
const updates = {};
updates['/' + newPostKey] = obj
return update(ref(database), updates);

  }

  return (
    <>
      <Container className='mt-5 '>
        <Row>
          <div className='pt-5 py-5 rounded w-50 m-auto bg-light'>
            <form onSubmit={handleSubmit}>
              <h3 className='text-center text-uppercase'>Sign Up</h3>
              <div className="mb-3 d-grid">
                <label className="form__label" for="firstName">First Name </label>
                <input className="form__input" type="text" value={firstName} onChange={(e) => handleInputChange(e)} id="firstName" placeholder="First Name" />
              </div>
              <div className="mb-3 d-grid">
                <label className="form__label" for="lastName">Last Name </label>
                <input type="text" name="" id="lastName" value={lastName} className="form__input" onChange={(e) => handleInputChange(e)} placeholder="LastName" />
              </div>
              <div className="mb-3 d-grid">
                <label className="form__label" for="email">Email </label>
                <input type="email" id="email" className="form__input" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" />
              </div>
              <div className="mb-3 d-grid">
                <label className="form__label" for="password">Password </label>
                <input className="form__input" type="password" id="password" value={password}  onChange={(e) => handleInputChange(e)} placeholder="Password" />
              </div>
              <div className="d-grid bg-primary rounded " >
                <button type="submit" class="btn text-light text-uppercase ">Register</button>
              </div>
              <p className="forgot-password text-right">
                Already registered <button className='bg-light border-0'  onClick={() => { navigate('/signin') }}>sign in?</button>
              </p>
            </form>
          </div>
        </Row>
      </Container>

    </>
  )
}