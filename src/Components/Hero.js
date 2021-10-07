import React from 'react'

const Hero = () => {
    return (
<div>
    <section id="hero" className="d-flex flex-column justify-content-end align-items-center hero">
    <div id="heroCarousel" className="container carousel carousel-fade" data-ride="carousel">


      <div className="carousel-item active">
        <div className="carousel-container">
          <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Landing</span></h2>
          <p className="animate__animated fanimate__adeInUp">Build pages that convert your traffic and leads into more business. Start creating now! Ready-made free templates, drag-and-drop editor and built-in image editor to make it easy. Try for free.</p>
          <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
        </div>
      </div>

      <div className="carousel-item">
        <div className="carousel-container">
          <h2 className="animate__animated animate__fadeInDown">Front end development service</h2>
          <p className="animate__animated animate__fadeInUp">Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website</p>
          <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
        </div>
      </div>

      <div className="carousel-item">
        <div className="carousel-container">
          <h2 className="animate__animated animate__fadeInDown">Back end development service</h2>
          <p className="animate__animated animate__fadeInUp">Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website. It focuses primarily on databases, backend logic, APIs, and Servers</p>
          <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
        </div>
      </div>

      <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>

      <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </section>
</div>
    );
}

export default Hero;
