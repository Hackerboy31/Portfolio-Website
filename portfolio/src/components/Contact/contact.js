import React from 'react'
import './contact.css';
import Meta from '../../assets/Meta.png';
import Gold from '../../assets/Gold.jpeg';
import Google from '../../assets/Google.jpeg';
import Microsoft from '../../assets/Microsoft.png';
import Amazon from '../../assets/Amazon.png';
import Github from '../../assets/Github.png';
import Linkdin from '../../assets/Linkdin.png';
import Instagram from '../../assets/Instagram.jpeg';
import Twitter from '../../assets/Twitter.png';

const Contact = () => {
  return (
   <section id="contact-page">
    <div id='client'>
        <h1  className='contact-title'>My Targets</h1>
        <p className='contact-descript'>I aspire to work in world-renowned companies like Google, Microsoft, Amazon, and others, where I can not only elevate my technical expertise to unprecedented heights but also thrive in an innovative, collaborative environment. These workplaces offer unparalleled opportunities to build meaningful connections with industry leaders and pioneers, while contributing to groundbreaking projects that shape the future of technologies.</p>
        <div className='client-imgs'>
              <a className='img' href='https://www.google.com/' target="_blank"><img className='client-img' src={Google} alt="Google" /></a>
              <a className='img' href='https://www.microsoft.com/en-in' target="_blank"><img className='client-img' src={Microsoft} alt="Microsoft" /></a>
              <a className='img' href='https://www.amazon.in/' target="_blank"><img className='client-img' src={Amazon} alt="Amazon" /></a>
              <a className='img' href='https://www.goldmansachs.com/' target="_blank"><img className='client-img' src={Gold} alt="Goldman Sachs" /></a>
              <a className='img' href='https://about.meta.com/metaverse/' target="_blank"><img className='client-img' src={Meta} alt="Meta" /></a>
        </div>
    </div>
    <div id='contact-us'>
        <h1 className='contact-title'>Contact Me</h1>
        <span className='contact-descript'>You can contact me here</span>
        <form className='contact-form'>
            <input type="text" placeholder='Name' className='name'/>
            <input type="email" placeholder='Email' className='email'/>
            <textarea name="message" rows="5" placeholder='Message' className='message'></textarea>
            <button type='submit' value= "send" className='submit-btn'>Submit</button>
            <div className='links'>
                <a href='https://www.linkedin.com/in/shaurya-kumar-51b962289?' target="_blank"><img src={Linkdin} alt="Linkdin" className='link' /></a>
                <a href='https://github.com/Hackerboy31' target="_blank"><img src={Github} alt="Github" className='link' /></a>
                <a href='https://www.instagram.com/i_shaurya31/#' target="_blank"><img src={Instagram} alt="Instagram" className='link' /></a>
                <a href='https://x.com/Shauryakumar31' target="_blank"><img src={Twitter} alt="Twitter" className='link' /></a>
            </div>
        </form>
    </div>
   </section>
  )
}

export default Contact;
