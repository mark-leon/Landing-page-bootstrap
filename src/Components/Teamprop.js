import React from 'react'

const Teamprop = (props) => {
    return (
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up">
              <div className="member-img">
                <img src={props.imgsrc} className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="icofont-twitter"></i></a>
                  <a href=""><i className="icofont-facebook"></i></a>
                  <a href=""><i className="icofont-instagram"></i></a>
                  <a href=""><i className="icofont-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>{props.name}</h4>
                <span>{props.post}</span>
              </div>
            </div>
        </div>
    )
}

export default Teamprop
