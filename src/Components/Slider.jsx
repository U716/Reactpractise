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
import { Assets } from '../Constant/images'
import { FaArrowRight } from "react-icons/fa"
import SwiperCore, { Autoplay } from 'swiper'
import Heading from './Heading';
import { Container, Row, Col } from 'react-bootstrap';


export default function Slider() {
  SwiperCore.use([Autoplay]);
  const [sliderdata, setSliderData] = useState([
    {
      img: Assets.Latest02,
      title: "DARK",
      description: "The League of Extraordinary Producers"
    },
    {
      img: Assets.Latest01,
      title: "Light",
      description: "The League of Extraordinary Producers"
    },
    {
      img: Assets.Latest02,
      title: "Blue",
      description: "The League of Extraordinary Producers"
    },
    {
      img: Assets.Latest01,
      title: "Red",
      description: "The League of Extraordinary Producers"
    },

    {
      img: Assets.Latest02,
      title: "Purple",
      description: "The League of Extraordinary Producers"
    },
  ]
  );

  // second data 
  const [sliderdata01, setSliderData01] = useState([
    {
      img: Assets.Latest01,
      title: "Yello",
      description: "The League of Extraordinary Producers"
    },
    {
      img: Assets.Latest02,
      title: "Green",
      description: "The League of Extraordinary Producers"
    },
    {
      img: Assets.Latest01,
      title: "Brown",
      description: "The League of Extraordinary Producers"
    },
    {
      img: Assets.Latest02,
      title: "Orange",
      description: "The League of Extraordinary Producers"
    },

    {
      img: Assets.Latest01,
      title: "White",
      description: "The League of Extraordinary Producers"
    },
  ]
  );
  return (
    <>
      <section className='slider'>
        <Container fluid>
          <Row>
            <Col xs={12} lg={8} xl={8} sm={12} md={8}>
              <div className="latest">
                <Heading title="latest Releases" />
              </div>
            </Col>
            <Col xs={12} lg={4} xl={4} sm={12} md={4} className='d-lg-flex justify-content-center align-items-center'>
              <Link className='btn' to="#">View all Releases</Link>
            </Col>
          </Row>
        </Container>
        <div className='fristSlider'>
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
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {sliderdata.map((data) => {
              return (

                <SwiperSlide>
                  <div className='slider-border'>
                    <LazyLoadImage src={data.img} className="img-fluid" alt="..." />
                    <h6 className="title">{data.title}
                      <span>
                        <Link className='text-light' to="#"><FaArrowRight /></Link>
                      </span>
                    </h6>
                    <p className='desc'>{data.description} </p>
                  </div>


                </SwiperSlide>
              )

            })
            }

          </Swiper>
        </div>
        <div className='SecondSlider py-4'>
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
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {sliderdata01.map((data) => {
              return (

                <SwiperSlide>
                  <div className='slider-border'>
                    <LazyLoadImage src={data.img} className="img-fluid" alt="..." />
                    <h6 className="title">{data.title}
                      <span>
                        <Link className='text-light' to="#"><FaArrowRight /></Link>
                      </span>
                    </h6>
                    <p className='desc'>{data.description} </p>
                  </div>


                </SwiperSlide>
              )

            })
            }

          </Swiper>
        </div>

      </section>

    </>
  )
}
