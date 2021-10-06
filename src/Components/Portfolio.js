import React from 'react'
import web1 from "../img/portfolio/portfolio-1.jpg"
import web2 from "../img/portfolio/portfolio-2.jpg"
import web3 from "../img/portfolio/portfolio-3.jpg"
import web4 from "../img/portfolio/portfolio-4.jpg"
import web5 from "../img/portfolio/portfolio-5.jpg"
import web6 from "../img/portfolio/portfolio-6.jpg"
import web7 from "../img/portfolio/portfolio-7.jpg"
import web8 from "../img/portfolio/portfolio-8.jpg"
import web9 from "../img/portfolio/portfolio-9.jpg"
import { Portfolioprop } from './Portfolioprop'


const Portfolio = () => {
    return (
    <div>
        <section id="portfolio" className="portfolio">
      <div className="container">

        <div className="section-title" data-aos="zoom-out">
          <h2>Portfolio</h2>
          <p>What we've done</p>
        </div>

        <ul id="portfolio-flters" className="d-flex justify-content-end" data-aos="fade-up">
          <li data-filter="*" className="filter-active">All</li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-card">Card</li>
          <li data-filter=".filter-web">Web</li>
        </ul>

        <div className="row portfolio-container" data-aos="fade-up">
          <Portfolioprop imgsrc={web1} head="App 1" para="App"></Portfolioprop>
          <Portfolioprop imgsrc={web2} head="Web 3" para="Web"></Portfolioprop>
          <Portfolioprop imgsrc={web3} head="App 2" para="App"></Portfolioprop>
          <Portfolioprop imgsrc={web4} head="Card 2" para="Card"></Portfolioprop>
          <Portfolioprop imgsrc={web5} head="Web 2" para="Web"></Portfolioprop>
          <Portfolioprop imgsrc={web6} head="App 3" para="App"></Portfolioprop>
          <Portfolioprop imgsrc={web7} head="Card 1" para="Card"></Portfolioprop>
          <Portfolioprop imgsrc={web8} head="Card 3" para="Card"></Portfolioprop>
          <Portfolioprop imgsrc={web9} head="Web 3" para="Web"></Portfolioprop>
        </div>

      </div>
    </section>
</div>
    )
}

export default Portfolio
