import React from 'react'
import './About.css'
import FED from '../../assets/Front End Development.jpeg'
import BED from '../../assets/Get my art printed on awesome products_ Support me….jpeg'
import FSD from '../../assets/The Full Stack Web Development.jpeg'

const About = () => {
  return (
    <div className="about">
        <p>About Web Development</p>
        <h2>I create user-friendly, and beautiful websites and application</h2>
        <div className="items">
            <div className="item">
                <div className="inner">
                    <img src={FED} alt=""/>
                    <a href="#">Front-End Development</a>
                    <p>
                        Passionate front-end developer skilled in HTML, CSS, and JavaScript, creating intuitive, responsive, and visually appealing user interfaces.
                    </p>
                </div>
            </div>

            <div className="item">
                <div className="inner">
                    <img src={BED} alt=""/>
                    <a href="#">Back-End Development</a>
                    <p>
                        As a back-end developer, I specialize in creating robust server-side logic, optimizing database interactions, and ensuring seamless API integrations.
                    </p>
                </div>
            </div>

            <div className="item">
                <div className="inner">
                    <img src={FSD} alt=""/>
                    <a href="#">Full-stack development</a>
                    <p>
                        As a fullstack developer, I specialize in creating seamless, user-friendly applications through front-end and back-end development expertise.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About