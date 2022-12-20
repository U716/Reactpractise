import React from 'react'
import { Link } from 'react-router-dom'
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaShoppingCart } from "react-icons/fa";
import SwiperCore, { Autoplay } from 'swiper';
import { Assets } from '../Constant/images'
import Heading from './Heading';
import { Container, Row, Col } from 'react-bootstrap';


SwiperCore.use([Autoplay]);

export default function Merchand() {
  const [productslider, setProductslider] = useState([
    {
      img: Assets.tshirt,
      title: "T shirt New",
      description: "The League of Extraordinary Producers"
    },
    {
      img: Assets.tshirt,
      title: "T shirt Old",
      description: "The League of Extraordinary Producers"
    },
    {
      img: Assets.tshirt,
      title: "T shirt Branded",
      description: "The League of Extraordinary Producers"
    },
    {
      img: Assets.tshirt,
      title: "T shirt JAck",
      description: "The League of Extraordinary Producers"
    },
    {
      img: Assets.tshirt,
      title: "T shirt Jones",
      description: "The League of Extraordinary Producers"
    },
  ])
  return (
    <>
      <section className='Merchand'>
        <Container fluid>
          <Row>
            <Col xs={12} lg={8} xl={8} sm={12} md={8} className='d-lg-flex justify-content-Start align-items-center'>
              <Link className='btn' to="#">View all Releases</Link>
            </Col>
            <Col xs={12} lg={4} xl={4} sm={12} md={4} >
              <div className="latest">
                <Heading title="merchandise products" />
              </div>
            </Col>
          </Row>
        </Container>
        <div className='productSlider'>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {productslider.map((data) => {
              return (
                <SwiperSlide>
                  <>
                    <div className='slider-border'>
                      <LazyLoadImage src={data.img} className="img-fluid" alt="..." />
                      <h6 className="title">{data.title}
                        <span>
                          <Link className='text-light' to="#"><FaShoppingCart /></Link>
                        </span>
                      </h6>
                      <p className='desc'>{data.description} </p>
                    </div>
                    <div >
                    </div>
                  </>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </section>
    </>
  )
}
