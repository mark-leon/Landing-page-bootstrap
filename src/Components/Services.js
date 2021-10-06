import React from 'react'
import Serviceprop from './Serviceprop'



const Services = (props) => {
    return (
<div>
    <section id="services" className="services">
      <div className="container">

        <div className="section-title" data-aos="zoom-out">
          <h2>Services</h2>
          <p>What we do offer</p>
        </div>

        <div className="row">
          <Serviceprop ico="las la-basketball-ball" color="#ff689b" title="Web development" desc="Build full stack web applications using the modern web technologies html,css,botstrap,react js,node js, express js, mongoDB"></Serviceprop>
          <Serviceprop ico="las la-book" color= "#e9bf06" title="Mobile App Development" desc="Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants"></Serviceprop>
          <Serviceprop ico="las la-file-alt" color="#3fcdc7" title="Machine Learning" desc="Machine learning is the study of computer algorithms that can improve automatically through experience and by the use of data"></Serviceprop>
          <Serviceprop ico="las la-tachometer-alt" color="#41cf2e" title="Artificial inteligence" desc="Artificial intelligence is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by humans or animals"></Serviceprop>
          <Serviceprop ico="las la-globe-americas" color ="#d6ff22" title="Blockchain" desc="A blockchain is a decentralized, distributed, and oftentimes public, digital ledger consisting of records called blocks that is used to record transactions"></Serviceprop>
          <Serviceprop ico="las la-clock" color="#4680ff" title="UX Design" desc="User experience (UX) design is the process design teams use to create products that provide meaningful and relevant experiences to users"></Serviceprop>
        </div>

      </div>
    </section>
</div>
    )
}

export default Services
