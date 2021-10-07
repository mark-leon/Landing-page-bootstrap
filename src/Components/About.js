import React from 'react'

const About = () => {
    return (
    <div>
      <section id="about" className="about">
      <div className="container">

        <div className="section-title" data-aos="zoom-out">
          <h2>About</h2>
          <p>Who we are</p>
        </div>

        <div className="row content" data-aos="fade-up">
          <div className="col-lg-6">
            <p>
            Affordable Freelancer Web Programming Services. Hire a freelance web developer expert services and get your web programming project done online
            </p>
            <ul>
              <li><i className="ri-check-double-line"></i>Writing well designed, testable, efficient code by using best software development practices</li>
              <li><i className="ri-check-double-line"></i>Creating website layout/user interfaces by using standard HTML/CSS practices</li>
              <li><i className="ri-check-double-line"></i>Integrating data from various back-end services and databases</li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
             We have extensive technical expertise who can work alongside a team and independently in the creation, maintenance, and updates of websites for clients in a variety of industries. Proficiency in JavaScript, HTML, CSS, and other web services and program applications is essential to succeeding in this role.
            </p>
            <a href="#" className="btn-learn-more">Learn More</a>
          </div>
        </div>

      </div>
    </section>   
    </div>
    )
}

export default About
