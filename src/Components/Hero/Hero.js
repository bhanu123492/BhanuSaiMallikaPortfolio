import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from "../../assets/chittinedibhanusaimallika.pdf"
const Hero = () => {
  return (
    <>
      <div id='hero' className='hero'>
        <img src={profile_img} alt='' />
        <h1><span>I' am Bhanu  Chittinedi</span> focusing on frontend developer based in Hyderabad</h1>
        <div className='hero-action'>
          <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
          <div className='hero-resume'><a className='anchor-link' href={resume} download={resume} >Resume</a></div>

        </div>
      </div >

    </>

  )
}
export default Hero;