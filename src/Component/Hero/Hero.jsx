import React from 'react'
import My_logo from '../../assets/My logo.jpg'
import './Hero.css'
import { IoLogoYoutube } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa"; // FaXTwitter is not a valid icon
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-section">
        <div className="top">
          <h2>Creative Fullstack Web </h2>
          <p>
            Design and code beautiful simple
            Projects without overwhelming
            yourself with complexity. Enjoy
            your 
            passion for creating with ease and 
            love.
          </p>

          <div className="buttons">
            <button className="doc">Hire me now</button>
            <button className="git">My Github</button>
          </div>
        </div>

        <div className="bottom">
          <p>Socials:</p>
          <div className="icons">
            <a href="https://www.youtube.com/yourchannel"><IoLogoYoutube /></a>
            <a href="https://x.com/yourhandle"><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/yourprofile/"><FaLinkedin /></a>
            <a href="https://www.instagram.com/yourhandle/"><AiFillInstagram /></a>      
          </div>
        </div>
      </div>
      <img src={My_logo} alt="" />
    </div>
  )
}

export default Hero