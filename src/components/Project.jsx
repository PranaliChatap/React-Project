import React from 'react'
import './style.css'
import SimpleSlider from './Slider'


const Project = () => {
  return (
    <div>
      <div className='project_div' id='work'>
      <p className='project_port'>My Portfolio</p>
      <p className='project_work'>Some Of My Latest Works</p>
       <div className='slider'>
       <SimpleSlider />
       </div>
       
      </div>
    </div>
  )
}

export default Project
