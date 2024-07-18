import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
    <h2>Interested in working Together</h2>
    <div className="items">
        <div className="item">
            <a href="#">Schedule a call</a>
            <p>Lets discuss your project ideas and how i can help you</p>
            <button>Schedule a call</button>
        </div>

        <div className="item">
            <a href="#">Explore My Work</a>
            <p>View my portfolio to see the kind of work i do for you</p>
            <button>View my work</button>
        </div>


    </div>
</div>

  )
}

export default Contact
