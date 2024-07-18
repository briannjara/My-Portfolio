import React from 'react'
import './Navbar.css'
import LOGO from '../../assets/logo 1.jpg'
import { RiGithubFill } from 'react-icons/ri' // Assuming the icon is from React Icons

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={LOGO} alt="" />
        <a href="">Brian Njaramba</a>
      </div>
      <div className="nav-links">
        <a href="">Docs</a>
        <a href="">Projects</a>
        <a href="">Blog</a>
        <a href="">Youtube</a>
        <a href="">About</a>
      </div>
      <button><RiGithubFill className='i' />My Projects</button>
    </nav>
  )
}

export default Navbar