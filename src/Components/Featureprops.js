import React from 'react'
const Featureprops = (props) => {
    return (
      <div className="row">
        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
          <h3>Front-end web development is the development of the graphical user interface of a website</h3>
          <p className="font-italic">
          Front-end developers might build websites or web applications, or focus on mobile web development
          </p>
          <ul>
            <li><i className="ri-check-double-line"></i> Determining the structure and design of web pages.</li>
            <li><i className="ri-check-double-line"></i> Ensuring user experience determines design choices.</li>
            <li><i className="ri-check-double-line"></i>Developing features to enhance the user experience. Striking a balance between functional and aesthetic design. Ensuring web design is optimized for smartphones.</li>
          </ul>
          <p>Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly.</p>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 text-center">
          <img src={props.imgsrc} alt="" className="img-fluid"/>
        </div>
    </div>
    )
}

export default Featureprops
