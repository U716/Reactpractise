import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Accordion, Carousel } from 'react-bootstrap';
import { Assets } from '../Constant/images'
import Heading from '../Components/Heading';
import { Stocks } from "../Components/Stock";


function Instrumentals() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const [accordiantext, setAccordiantext] = useState([
    {
      title: "What is UI/UX design?",
      description: "UI/UX design stands for user interface and user experience design. It refers to the process of designing user interfaces and user experiences for software products, websites, and mobile apps. UI/UX designers work to create designs that are both effective and appealing to users.",
    },
    {
      title: "What skills do I need for UI/UX design?",
      description: "UI/UX design stands for user interface and user experience design. It refers to the process of designing user interfaces and user experiences for software products, websites, and mobile apps. UI/UX designers work to create designs that are both effective and appealing to users.",
    },
    {
      title: "How can UI/UX design improve my business?",
      description: "UI/UX design stands for user interface and user experience design. It refers to the process of designing user interfaces and user experiences for software products, websites, and mobile apps. UI/UX designers work to create designs that are both effective and appealing to users.",
    },
    {
      title: "What are the main goals of UI/UX design?",
      description: "UI/UX design stands for user interface and user experience design. It refers to the process of designing user interfaces and user experiences for software products, websites, and mobile apps. UI/UX designers work to create designs that are both effective and appealing to users.",
    },
  ])
  const [accordiantext2, setAccordiantext2] = useState([
    {
      title: "What are some common UI/UX design challenges?",
      description: "UI/UX design stands for user interface and user experience design. It refers to the process of designing user interfaces and user experiences for software products, websites, and mobile apps. UI/UX designers work to create designs that are both effective and appealing to users.",
      eventKey: "4"
    },
    {
      title: "What are the main goals of UI/UX design?",
      description: "UI/UX design stands for user interface and user experience design. It refers to the process of designing user interfaces and user experiences for software products, websites, and mobile apps. UI/UX designers work to create designs that are both effective and appealing to users.",
      eventKey: "5"
    },
    {
      title: "How can UI/UX design improve my business?",
      description: "UI/UX design stands for user interface and user experience design. It refers to the process of designing user interfaces and user experiences for software products, websites, and mobile apps. UI/UX designers work to create designs that are both effective and appealing to users.",
      eventKey: "6"
    },

  ])
  return (
    <>
      {/* carosal section  */}
      <Carousel slide={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 m-auto"
            src={Assets.footer01}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 m-auto"
            src={Assets.footer02}
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 m-auto"
            src={Assets.footer01}
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
      {/* carosal section  */}
      {/* accordian section  */}
      <section className='faq'>
        <Container className='py-5 pb-5'>
          <Heading
            title="Frequently Asked Questions" />
          <Row>
            {/* accordian right */}
            <Col xs={12} lg={6} xl={6} sm={12} md={6}>
              {accordiantext.map((data, index) => {
                return (
                  <Accordion defaultActiveKey="none" key={index}>
                    <Accordion.Item key={index}>
                      <Accordion.Header>
                        {data.title}</Accordion.Header>
                      <Accordion.Body>
                        {data.description}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                )

              })
              }

            </Col>
            {/* accordian right */}
            {/* accordian left */}
            <Col xs={12} lg={6} xl={6} sm={12} md={6}>
              <Accordion defaultActiveKey="none">
                {accordiantext2.map((data) => {
                  return (
                    <Accordion.Item eventKey={data.eventKey}>

                      <Accordion.Header>{data.title}</Accordion.Header>
                      <Accordion.Body>
                        {data.description}
                      </Accordion.Body>

                    </Accordion.Item>

                  )

                })
                }

              </Accordion>

            </Col>
            {/* accordian left */}

          </Row>
        </Container>
      </section>
      {/* accordian section  */}
      <section className='Sucess pb-5' >
        <Container className='counter'>
          <Row>
            <Col xs={12} lg={6} xl={6} sm={12} md={6}>
              <div className='heading'>
                <Heading title="Setting The Bars High Towards Success" />
                <p>Cydomedia strives to help businesses meet thier goals by offering blazing-fast digital solutions that captivate the audience. We are more than just an ordinary design agency that only focuses on the design aspects, and rarely looks into pulling brand values, insights, and voice. We have a proven track record of satisfying clients from strategizing the right pathway to getting it implemented with an influential workforce.</p>
              </div>
            </Col>
            <Col xs={12} lg={6} xl={6} sm={12} md={6}>
              <div className='text-center py-5'>
                <h6 className='font-bold'>Project Completed</h6>
                <div className="App">{counter}</div>
              </div>
              <div className='text-center'>
                <h6 className='font-bold'> Project Completed</h6>
                <div className="App">{counter}</div>
              </div>
              <div className='text-center py-5'>
                <h6 className='font-bold'> Project Completed</h6>
                <div className="App">{counter}</div>
              </div>

            </Col>
          </Row>
        </Container>
      </section>

      {/* stock data  */}
      <section>
        <Container>
          <Stocks />
        </Container>
      </section>
      {/* stock data  */}

    </>
  );
}

export default Instrumentals;