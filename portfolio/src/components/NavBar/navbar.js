import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.webp';
import Hamburger from '../../assets/Hamburger.svg';
import Contact from '../../assets/Contact.svg';
import {Link} from 'react-scroll';


const Navbar = () => {
  const [showmenu , setShowMenu] = useState(false);
  return (
   <nav className="navbar">
    <img src={logo} alt="logo" className='logo'/>
    <div className="dekstop-menu">
        <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-27} duration={500} className="desktop-menu-item">Home</Link>
        <Link activeClass='active' to="skill" spy={true} smooth={true} offset={-27} duration={500}className="desktop-menu-item">Clients</Link>
        <Link activeClass='active' to="works" spy={true} smooth={true} offset={-27} duration={500} className="desktop-menu-item">Portfolio</Link>
        <Link activeClass='active' to='contact-page' spy={true} smooth={true} offset={-27} duration={500}className="desktop-menu-item">About</Link>
    </div>
    <button className="desktop-menu-btn" onClick={() =>{
      document.getElementById('contact-us').scrollIntoView({behavior: 'smooth'});
    }}>
        Contact me</button>

        <img src={Hamburger} alt="Hamburger" className='mobMenu'onClick={()=>setShowMenu(!showmenu)}/>
        <div className="navmenu" style={{display:showmenu ? 'flex' : 'none'}}>
        <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-27} duration={500} className="list-item" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to="skill" spy={true} smooth={true} offset={-27} duration={500}className="list-item" onClick={()=>setShowMenu(false)}>Clients</Link>
        <Link activeClass='active' to="works" spy={true} smooth={true} offset={-27} duration={500} className="list-item" onClick={()=>setShowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='client' spy={true} smooth={true} offset={-27} duration={500}className="list-item" onClick={()=>setShowMenu(false)}>Clients</Link>
        <Link activeClass='active' to='contact-us' spy={true} smooth={true} offset={-27} duration={500}className="list-item" onClick={()=>setShowMenu(false)}>Contact</Link>
    </div>
   </nav>
  )
}

export default Navbar;
