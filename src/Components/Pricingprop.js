import React from 'react'

const Pricingprop = (props) => {
    return (
        <div className="col-lg-3 col-md-6">
            <div className="box" data-aos="zoom-in">
              <h3 style={{background: props.color}}>{props.option}</h3>
              <h4><sup>$</sup>{props.amount}<span> / month</span></h4>
              <ul>
                <li>Free Domain</li>
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>      
    )
}

export default Pricingprop
