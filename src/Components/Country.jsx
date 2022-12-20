import React, { useState, useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import { Container, Row, Col } from 'react-bootstrap';

export default function Country() {
    const navigate =useNavigate()
  const [countryItems, initCountry] = useState([])
  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!response.ok) {
      throw new Error('Data coud not be fetched!')
    } else {
      return response.json()
    }
  } 
  useEffect(() => {
    fetchData()
      .then((res) => {
        initCountry(res)
      })
      .catch((e) => {
        console.log(e.message)
      })
  }, [])
  return (
    <>
    <Container>
        <Row>
        {countryItems.map((data, idx) => {
        return (
            <Col xs={12} lg={3} xl={3} sm={12} md={3} key={idx} className='pb-5'>
            <div className="card h-100 ">
                  <div className="card-body">
                    <h5 className="card-title">{data.userId}</h5>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <strong>Capital:</strong> {data.id}
                    </li>
                    <li className="list-group-item">
                      <strong>Population:</strong> {data.title}
                    </li>
                    <li className="list-group-item">
                      <strong>Continent:</strong> {data.body}
                    </li>
                  </ul>
                  <div className="card-body">
                    <div className="d-grid">
                      <button
                        className="btn btn-dark"
                        target="_blank"
                        onClick={()=>{navigate('/Detail',{state:{id:data?.id}})}}
                      >
                        CLICK ME
                      </button>
                    </div>
                  </div>
                </div>
            </Col>
        )
      })}
   
        </Row>
    </Container>

    </>
  )
}
  
