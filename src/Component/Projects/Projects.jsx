import React from 'react'
import './Projects.css'
import { FiCommand } from "react-icons/fi";
import { FaShoppingBag } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { MdApps } from "react-icons/md";
import { IoNewspaper } from "react-icons/io5";

const Projects = () => {
  return (
    <div class="projects">
    <div class="inner">
        <p class="debug"><FiCommand className='i'/>Troubleshoot & Debug</p>
        <h2>Projects Showcase</h2>
        <p class="info">Take a look at some of my notable projects, showcasing my 
            effective web solutions.
        </p>
        <button>Explore my projects</button>

     <div class="items">
            <div class="item">
                <FaShoppingBag className='i'/>
                <a href="#">E-Commerce</a>
                <p>Developed full-featured e-commerce platform with secure payments</p>
            </div>
        

        
            <div class="item">
                <FaAddressCard className='i'/>
                <a href="#">Portfolio Website</a>
                <p>Designed and built a personal portfolio website to show case my projects and skills</p>
            </div>
        

        
            <div class="item">
                <MdApps className='i'/>
                <a href="#">Social Media Apps</a>
                <p>Created a social media application with real-time updates and user interactions</p>
            </div>
        

        
            <div class="item">
                <IoNewspaper className='i'/>
                <a href="#">Blog Platforms</a>
                <p>Built a dynamic blog platform with content management features</p>
            </div>
        </div>






    </div>
</div>
  )
}

export default Projects
