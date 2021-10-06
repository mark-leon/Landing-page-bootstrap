import React from 'react'

const Serviceprop = (props) => {
    return (
        <div className="col-lg-4 col-md-6 mt-5 mt-md-0 box">
            <div className="icon-box" data-aos="zoom-in-left" data-aos-delay="50">
              <div className="icon"><i className={props.ico} style={{color: props.color}}></i></div>
              <h4 className="title"><a href="">{props.title}</a></h4>
              <p className="description">{props.desc}</p>
            </div>
        </div>
    )
}

export default Serviceprop
