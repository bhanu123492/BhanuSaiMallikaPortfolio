import React, { useState, useRef } from 'react';
import logo1 from '../../assets/logo1-removebg-preview.png'
import './Navbar.css';
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }
  return (

    <>
      <div id='navbar' className='navbar'>
        <img src={logo1} alt="" className='nav-img' />
        <img src={menu_open} onClick={openMenu} alt='' className='nav-mob-open' />
        <ul ref={menuRef} className='nav-menu'>
          <img src={menu_close} onClick={closeMenu} alt='' className='nav-mob-close' />
          <li><AnchorLink className='anchor-link' href='#navbar'><p onClick={() => { setMenu("home") }}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt='' /> : <></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => { setMenu("about") }}>About Me</p></AnchorLink>{menu === "About" ? <img src={underline} alt='' /> : <></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => { setMenu("services") }}>Services</p></AnchorLink>{menu === "Services" ? <img src={underline} alt='' /> : <></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#mywork'><p onClick={() => { setMenu("portfolio") }}>Portfolio</p></AnchorLink>{menu === "Portfolio" ? <img src={underline} alt='' /> : <></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => { setMenu("contact") }}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} alt='' /> : <></>}</li>
        </ul>
        <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>

      </div >
    </>
  )
}
export default Navbar;