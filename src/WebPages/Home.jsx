import React from 'react'
import Slider from '../Components/Slider'
import Merchand from '../Components/Merchand'
import { Link } from 'react-router-dom'
import { Assets } from '../Constant/images'
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { FaArrowDown } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SwiperCore, { Autoplay } from 'swiper';
import Heading from '../Components/Heading'
import { Container, Row, Col } from 'react-bootstrap';




export default function Home() {
SwiperCore.use([Autoplay]);
const handleClickScroll = () => {
  const element = document.getElementById('section-1');
  if (element) {
    //  scroll to the top of the next section
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

  const [bannerslider, setBannerSlider] = useState([
    {
      img: Assets.Slide1
    },
    {
      img: Assets.Slide2
    },
    {
      img: Assets.Slide3
    },
    {
      img: Assets.Slide4
    },
    {
      img: Assets.Slide5
    },
  ])
  return (
    <>
      {/* banner  */}
      <section className='banner'>
        <div className="smoke-image">
          <LazyLoadImage src={Assets.BannerSmoke} className="img-fluid" alt="..." />

        </div>
        <div className='productSlider'>
          <Swiper
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 10,
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
            {bannerslider.map((data) => {
              return (
                <SwiperSlide>
                  <div className='slider-border'>
                    <LazyLoadImage src={data.img} className="img-fluid" alt="..." />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>

        </div>
        <div class="memories">
          <Heading title="We Create memories" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni necessitatibus a nisi veritatis
            adipisicing elit. Magni necessitatibus a nisi veritatis
          </p>
        </div>

        <div class="arrow-down">
          <Link onClick={handleClickScroll} className='text-light' to="#arrow-downwrads"><FaArrowDown /></Link>
        </div>
        <div className="spacer"></div>
      </section>
      {/* banner  */}
      <section className='aboutsec py-lg-5' id="section-1">
        <Container fluid>
          <Row>
            <Col xs={12} lg={6} xl={6} sm={12} md={6}>
              <div className='py-4 about-image px-3'>
                <Heading title="About Us" />
                <div className="text">
                  <p>The League of Extraordinary <br />Producers</p>
                </div>
                <LazyLoadImage src={Assets.Image} className="img-fluid" alt="..." />
              </div>
            </Col>
            <Col xs={12} lg={6} xl={6} sm={12} md={6}>
              <div className="right-text py-5">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
                <Link className='btn' to="/about">Learn More</Link>
              </div>
            </Col>

          </Row>
        </Container>
      </section>
      {/* slider  */}
      <section className="p-0 py-4">
        <Container fluid>
          <Slider />
        </Container>
      </section>
      {/* slider  */}
      {/* LEGACY */}
      <section className='legacy py-4 mb-4'>
        <Heading title="THIS IS OUR <span>LEGACY</span>" />
        <p>Creating memories <br />since 2002</p>
      </section>
      {/* LEGACY */}
      {/* Merchand */}
      <section className='p-0 py-4'>
        <Container fluid>
          <Merchand />
        </Container>
        {/* Merchand */}

      </section>
      {/* email  */}
      <section className='Email p-4'>
        <Container>
          <Row>
            <Col xs={12} lg={4} xl={4} sm={12} md={4}>
              <div className='pt-5 text-center'>
                <LazyLoadImage src={Assets.footer01} className="img-fluid" alt="..." />
              </div>
            </Col>
            <Col xs={12} lg={4} xl={4} sm={12} md={4}>
              <Heading title="YOU NEED MORE E-MAIL" />
              <p className='text-center text-light'>The League of Extraordinary Producers newsletter
                has everything.  music pictures. product, everything.
                We send it  every week. You will like it, realy</p>
              <div className='pt-3  text-center'>
                <LazyLoadImage src={Assets.footer02} className="img-fluid" alt="..." />
              </div>
            </Col>
            <Col xs={12} lg={4} xl={4} sm={12} md={4}>
              <div className="px-4 text-center py-2">
                <LazyLoadImage src={Assets.footer01} className="img-fluid" alt="..." />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* email  */}
    </>
  )
}
