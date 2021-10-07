import React from 'react'
import Featureprops from './Featureprops'
import web1 from "../img/features-1.png"
import web2 from "../img/features-2.png"
import web3 from "../img/features-3.png"
import web4 from "../img/features-4.png"
const Feature = () => {
    return (
    <div>
        <section id="features" className="features">
      <div className="container">

        <ul className="nav nav-tabs row d-flex">
          <li className="nav-item col-3" data-aos="zoom-in">
            <a className="nav-link active show" data-toggle="tab" href="#tab-1">
              <i className="ri-gps-line"></i>
              <h4 className="d-none d-lg-block">Front end development</h4>
            </a>
          </li>
          <li className="nav-item col-3" data-aos="zoom-in" data-aos-delay="100">
            <a className="nav-link" data-toggle="tab" href="#tab-2">
              <i className="ri-body-scan-line"></i>
              <h4 className="d-none d-lg-block">Building user interface</h4>
            </a>
          </li>
          <li className="nav-item col-3" data-aos="zoom-in" data-aos-delay="200">
            <a className="nav-link" data-toggle="tab" href="#tab-3">
              <i className="ri-sun-line"></i>
              <h4 className="d-none d-lg-block">Convert desing file</h4>
            </a>
          </li>
          <li className="nav-item col-3" data-aos="zoom-in" data-aos-delay="300">
            <a className="nav-link" data-toggle="tab" href="#tab-4">
              <i className="ri-store-line"></i>
              <h4 className="d-none d-lg-block">Pixel perfect development</h4>
            </a>
          </li>
        </ul>

        <div className="tab-content" data-aos="fade-up">
          <div className="tab-pane active show" id="tab-1">
            <Featureprops imgsrc ={web1}></Featureprops>
          </div>
          <div className="tab-pane" id="tab-2">
            <Featureprops imgsrc ={web2}></Featureprops>
          </div>
          <div className="tab-pane" id="tab-3">
            <Featureprops imgsrc ={web3}></Featureprops>
          </div>
          <div className="tab-pane" id="tab-4">
            <Featureprops imgsrc ={web4}></Featureprops>
          </div>
        </div>

      </div>
    </section>
</div>
    );
}

export default Feature;
