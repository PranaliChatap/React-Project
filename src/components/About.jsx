import React from 'react'
import './style.css'

const About = () => {

  return (
    <div>
      
      <div className='container'>
        <div className='item'>Hey there!<br/>
        I'm Lorem Ipsum Independent <span className='free'>Designer</span>
        <div>
            <p  className='para0'>I create thousands of website</p>
            <button type="button" className="btn btn-info hire-button">Connect</button>
        </div>        
        </div>
        <div className='item'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1HdGC7LMwfGJ-NRyGZUJzwizduo9iatduMw&usqp=CAU" className="img_1" alt="..." />
        </div>
      </div>
      
    </div>
  )
}

export default About
