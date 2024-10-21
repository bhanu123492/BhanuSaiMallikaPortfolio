import React from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import arrow_icon from '../../assets/arrow_icon.svg'
const Services = () => {
  const Services_Data = [
    {
      s_no: "01",
      s_name: "Web design",
      s_desc: "Web development is the process of building programming..."
    },

    {
      s_no: "02",
      s_name: "Database",
      s_desc: "Used to organized  the data  with  sql  Language"
    },
    {
      s_no: "03",
      s_name: "Java",
      s_desc: " To create backend applications using this technologies"
    }


  ]
  return (
    <>
      <div id='services' className='services'>
        <div className='services-title'>
          <h1>My Services</h1>
          <img src={theme_pattern} alt='' />
        </div>
        <div className='services-container'>
          {Services_Data.map((services, index) => {
            return <div key={index} className='services-format'>
              <h3>{services.s_n0}</h3>
              <h2>{services.s_name}</h2>
              <p>{services.s_desc}</p>
              <div className='services-readmore'>
                <p>Read More</p>
                <img src={arrow_icon} alt='' />


              </div>

            </div>
          })}
        </div>
      </div>
    </>
  )
}
export default Services;