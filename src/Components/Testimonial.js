import React from 'react'
import web1 from "../img/testimonials/testimonials-1.jpg"
import web2 from "../img/testimonials/testimonials-2.jpg"
import web3 from "../img/testimonials/testimonials-3.jpg"
import web4 from "../img/testimonials/testimonials-4.jpg"
import web5 from "../img/testimonials/testimonials-5.jpg"
import Testimonialprop from './Testimonialprop'


const Testimonial = () => {
    return (
<div>
    <section id="testimonials" className="testimonials">
      <div className="container">

        <div className="section-title" data-aos="zoom-out">
          <h2>Testimonials</h2>
          <p>What they are saying about us</p>
        </div>

        <div className="owl-carousel testimonials-carousel" data-aos="fade-up">

        <Testimonialprop imgsrc={web1}></Testimonialprop>
        <Testimonialprop imgsrc={web2}></Testimonialprop>
        <Testimonialprop imgsrc={web3}></Testimonialprop>
        <Testimonialprop imgsrc={web4}></Testimonialprop>
        <Testimonialprop imgsrc={web5}></Testimonialprop> 

        </div>

      </div>
    </section>
</div>
    )
}

export default Testimonial
