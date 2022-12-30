import React from 'react'
import { Container } from 'react-bootstrap';
import Heading from '../Components/Heading';




export default function Services() {
  return (
    <>
      <div>
        {/* banner section  */}
        <section className='services py-5'>
          <Container>
            <Heading title="Welcome To Services" />
            <p>
              Web Design Services
              A Web Design Company Combining Creativity With Technology</p>
          </Container>
        </section>
        {/* banner section  */}

        {/* Unlock The True Potential */}
        <section className='unlock'>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <Heading title="Unlock The True Potential Of Your Website With Our Exemplary Web Design Services" />
                <p>
                  Buzzflick is a par-excellent, top-notch, leading web design agency with a creative team that creates inventive, fresh, and SEO-optimized websites that capture your audience, boost your conversion rates and skyrocket your revenue to help your business meet your goals and grow efficiently.
                  We are confident in our ability to create a personalized website that increases revenue for a company like yours. Get in touch with our web designing experts and get a custom website designed for your business.</p>

              </div>
            </div>
          </div>
        </section>

        {/* Unlock The True Potential */}

        {/* tabs section  */}
        <section>

        </section>

        {/* tabs section  */}



      </div>
    </>
  )
}
