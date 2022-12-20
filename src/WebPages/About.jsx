import React, { useState } from 'react'
import Slider from '../Components/Slider'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from 'react-router-dom';
import { Assets } from '../Constant/images';
import { Heart } from '../Constant/svg';
import Card from 'react-bootstrap/Card';
import Heading from '../Components/Heading';
import { Container, Row, Col } from 'react-bootstrap';
import { Random } from '../Components/Random';
import Country from '../Components/Country';

export default function About() {
    const [card, setCard] = useState([
        {
            title: 'Card Title',
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex magnam consequatur corporis dolore quam neque assumenda numquam repellat, quibusdam odio."
        },
        {
            title: 'Card Title 02',
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex magnam consequatur corporis dolore quam neque assumenda numquam repellat, quibusdam odio."
        },
        {
            title: 'Card Title 03',
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex magnam consequatur corporis dolore quam neque assumenda numquam repellat, quibusdam odio."
        },       {
            title: 'Card Title 02',
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex magnam consequatur corporis dolore quam neque assumenda numquam repellat, quibusdam odio."
        },
        {
            title: 'Card Title 03',
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex magnam consequatur corporis dolore quam neque assumenda numquam repellat, quibusdam odio."
        },
        {
            title: 'Card Title 03',
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex magnam consequatur corporis dolore quam neque assumenda numquam repellat, quibusdam odio."
        },
    ])
    return (
        <div>
            {/* banner section  */}
            <section className='about h-100'>
                <Container>
                    <Row>
                        <Col xs={12} lg={6} xl={6} sm={12} md={6}>
                            <div className="main-heading">
                                <Heading title="Best Web Design Company in Houston" />
                                <p>We're an award-winning Houston web design company, creating web solutions that are sleek, robust, and captivating. For us the satisfaction of the customers matters the most!</p>
                                <Link className='btn' to="/contact">Contact Us</Link>
                            </div>
                        </Col>
                        <Col xs={12} lg={6} xl={6} sm={12} md={6}>
                            <div className="banner-image">
                                <LazyLoadImage src={Assets.Image} className="img-fluid" alt="..." />

                            </div>
                        </Col>


                    </Row>
                </Container>

            </section>
            {/* banner section  */}

            {/* second section  */}
            <section>
                <Container>
                    <Row>
                        {card.map((data) => {
                            return (
                                <Col xs={12} lg={4} xl={4} sm={12} md={4}>

                                    <Card className=''>
                                        <Card.Body className='custom-logo text-center'>
                                            <Heart />
                                            <Card.Title >{data.title}</Card.Title>
                                            <Card.Text>
                                                {data.description}

                                            </Card.Text>
                                        </Card.Body>

                                    </Card>
                                </Col>
                            )

                        })
                        }
                    </Row>
                </Container>
            </section>
            {/* second section  */}

            {/* slider  */}
            <section className="container-fluid p-0 py-4">
                <Slider />
            </section>
            {/* slider  */}

            <section>
        <Container>
          <Random />
        </Container>
      </section>
      <section>
        <Container>
         <Country />
        </Container>
      </section>

        </div>
    )
}
