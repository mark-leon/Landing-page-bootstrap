import React from 'react'
import Pricingprop from './Pricingprop'

const Pricing = () => {
    return (
    <div>
        <section id="pricing" className="pricing">
      <div className="container">

        <div className="section-title" data-aos="zoom-out">
          <h2>Pricing</h2>
          <p>Our Competing Prices</p>
        </div>

        <div className="row">

          <Pricingprop option = "Free" amount = "0"></Pricingprop>
          <Pricingprop option = "Business" amount = "19" color="#ef6603"></Pricingprop>
          <Pricingprop option = "Developer" amount = "29"></Pricingprop>
          <Pricingprop option = "Ultimate" amount = "49"></Pricingprop>

        </div>

      </div>
    </section>
    </div>
    );
}

export default Pricing
