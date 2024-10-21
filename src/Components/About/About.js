import React from 'react';
import './About.css';
import profile_img from '../../assets/profile_img.svg.jpg'
import theme_pattern from '../../assets/theme_pattern.svg'
const About = () => {
  return (
    <>
      <div id='about' className='about'>
        <div className='about-title'>
          <h1>About me</h1>
          <img src={theme_pattern} alt='' />
        </div>
        <div className='about-sections'>
          <div className='about-left'>
            <img src={profile_img} alt='' />
          </div>
          <div className='about-right'>
            <div className='about-para'>
              <p>I am experienced Frontend Developer with over a decade of professional expertise in the feild Throughout my career,I have had the privellege of collaborating with prestigious organizations, contributing to their success and growth</p>
              <p>My position for frontened development is not only reflected in my extensive experience but also in the enthusiam and dedication I bring to each project</p>
            </div>
            <div className='about-skills'>
              <div className='about-skill'><p>HTML&CSS</p><hr style={{ width: "50%" }} /></div>
              <div className='about-skill'><p>React Js</p><hr style={{ width: "50%" }} /></div>
              <div className='about-skill'><p>JavaScript</p><hr style={{ width: "70%" }} /></div>
              <div className='about-skill'><p>Java</p><hr style={{ width: "60%" }} /></div>
              <div className='about-skill'><p>MySQl</p><hr style={{ width: "50%" }} /></div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
export default About;