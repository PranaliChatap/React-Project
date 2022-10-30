import React from 'react'
import Slider from "react-slick"
import './style.css'

const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
       
      }
  return ( 
    <Slider {...settings}>
      <div className='slide_container ' id="project">
        <a href='https://john.wethemez.com/'><img src='https://john.wethemez.com/static/media/new1.b3c89bef.jpg' className='slider_img slide' alt='' /></a>
        <p className='slide_para'>App Design</p>
        <p className='small_para'>UI/UX Design</p>
        <button type='button' className='btn btn-info hire-button m-3'>View</button>
      </div>
      <div className='slide_container'>
        <a href='https://john.wethemez.com/'><img src='https://john.wethemez.com/static/media/portfolio1.27473693.jpg' className='slider_img slide' alt='' /></a>
        <p className='slide_para'>Logo Design</p>
        <p className='small_para'>UI/UX Design</p>
        <button type='button' className='btn btn-info hire-button m-3'>View</button>
      </div>
      <div className='slide_container'>
        <a href='https://john.wethemez.com/'><img src='https://john.wethemez.com/static/media/portfolio2.35b5680d.jpg' className='slider_img slide' alt='' /></a>
        <p className='slide_para'>Creative Design</p>
        <p className='small_para'>UI/UX Design</p>
        <button type='button' className='btn btn-info hire-button m-3'>View</button>
      </div>
      <div className='slide_container'>
        <a href='https://john.wethemez.com/'><img src='https://john.wethemez.com/static/media/new1.b3c89bef.jpg' className='slider_img slide' alt='' /></a>
        <p className='slide_para'>UI/UX Design</p>
        <p className='small_para'>UI/UX Design</p>
        <button type='button' className='btn btn-info hire-button m-3'>View</button>
      </div>
      <div className='slide_container'>
        <a href='https://john.wethemez.com/'><img src='https://john.wethemez.com/static/media/new1.b3c89bef.jpg' className='slider_img slide' alt='' /></a>
        <p className='slide_para'>Web Design</p>
        <p className='small_para'>UI/UX Design</p>
        <button type='button' className='btn btn-info hire-button m-3'>View</button>
      </div>
      <div className='slide_container'>
        <a href='https://john.wethemez.com/'><img src='https://john.wethemez.com/static/media/new1.b3c89bef.jpg' className='slider_img slide' alt='' /></a>
        <p className='slide_para'>Website Design</p>
        <p className='small_para'>UI/UX Design</p>
        <button type='button' className='btn btn-info hire-button m-3'>View</button>
      </div>
    </Slider>
 
  
  )
}

export default SimpleSlider
