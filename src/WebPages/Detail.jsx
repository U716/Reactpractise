import {useLocation} from "react-router-dom"
import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';



const Detail = () => {
    const [detail, setDetail] = useState([])
    const {state} = useLocation();
    // console.log(state,"STATE CHECKING");
    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${state.id}`)
      if (!response.ok) {
        throw new Error('Data coud not be fetched!')
      } else {
        return response.json()
      }
    }
    useEffect(() => {
        fetchData()
          .then((res) => {
            setDetail(res)    })
          .catch((e) => {
            console.log(e.message)
          })
      }, [])
  return (

    <Container>
        <Row>
            <Col xs={12} lg={12} xl={12} sm={12} md={12}>
            <p className="text-light">{detail?.userId}</p>
  	<p className="text-light">{detail?.id}</p>
  	<p className="text-light">{detail?.title}</p>
  	<p className="text-light">{detail?.body}</p>
            </Col>
        </Row>
    </Container>


  )
}

export default Detail