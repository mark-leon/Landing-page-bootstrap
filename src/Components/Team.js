import React from 'react'
import Teamprop from './Teamprop'
import web1 from "../img/team/team-1.jpg"
import web2 from "../img/team/team-2.jpg"
import web3 from "../img/team/team-3.jpg"
import web4 from "../img/team/team-4.jpg"

const Team = () => {
    return (
        <div>
            <section id="team" className="team">
      <div className="container">

        <div className="section-title" data-aos="zoom-out">
          <h2>Team</h2>
          <p>Our Hardworking Team</p>
        </div>

        <div className="row">
        <Teamprop imgsrc={web1} name="Walter John" post="Cheif Executive officer"></Teamprop>
        <Teamprop imgsrc={web2} name="Aidra Jenner" post="Cheif operating officer"></Teamprop>
        <Teamprop imgsrc={web3} name="Tom cruise" post="Cheif financial officer"></Teamprop>
        <Teamprop imgsrc={web4} name="Kylie red" post="Cheif technical officer"></Teamprop>
        </div>

      </div>
    </section>
        </div>
    )
}

export default Team
