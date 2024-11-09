import React from 'react';
import './intro.css';
import Shaurya from '../../assets/Shaurya.png';

const Intro = () => {
  return (
    <section id="intro">
        <div className="intro-container">
            <span className="hello">Hello,</span>
            <span className='intro'>I'm<span className="name"> Shaurya</span><br/>Web Developer</span>
            <p className='intro-para'>I am Skilled in <strong> MERN Stack Developement</strong> with Experience in creating <br/>  visually appealling and user friendly websites.</p>
        </div>
        <img src={Shaurya} alt='' className='bg'/>
    </section>
  )
}

export default Intro;
