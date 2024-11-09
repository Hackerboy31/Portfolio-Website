import React from "react";
import "./skill.css";
import TailwindCSS from "../../assets/TailwindCSS.png";
import Web from "../../assets/Web.jpeg";
import ReactPic from "../../assets/ReactPic.png";
import Front from "../../assets/Front.png";
import MERNPic from "../../assets/MERNPic.jpeg";

const Skills = () => {
  return (
    <section id="skill">
      <span className="skill-title">What I Do</span>
      <span className="skill-descript">
        A proficient Web Developer with expertise in HTML, CSS, JavaScript,
        React.js, Node.js, Express.js, and MongoDB. Adept at building full-stack
        web applications, ensuring smooth user experiences with dynamic
        front-end interfaces and efficient back-end functionality. Skilled in
        creating responsive, mobile-friendly designs and developing RESTful
        APIs. Strong focus on performance optimization, security, and scalable
        solutions.
      </span>
      <div className="skill-bar">
        <div className="skill-item">
          <img className="skill-img" src={MERNPic} alt="MERN Stack" />
          <div className="skill-text">
            <h2>MERN Stack Developer</h2>
            <p>
              <strong>
                The MERN stack—MongoDB, Express.js, React.js, and Node.js
              </strong>
              —is a powerful set of technologies I use to build dynamic,
              full-stack web applications. MongoDB provides a flexible NoSQL
              database, while Express.js and Node.js form a fast and scalable
              back-end architecture.{" "}
              <strong>
                React.js enables me to create interactive, high-performance
                front-end experiences.
              </strong>{" "}
              Together, these technologies allow me to deliver robust, seamless
              applications that are both scalable and efficient.
            </p>
          </div>
        </div>
        <div className="skill-item">
          <img className="skill-img" src={Front} alt="Front Developer" />
          <div className="skill-text">
            <h2>Frontened Developer</h2>
            <p>
              Front-end development is the art of transforming ideas into
              stunning, interactive user experiences. With expertise in{" "}
              <strong> HTML, CSS, and JavaScript</strong> , I craft visually
              captivating, responsive designs that engage users seamlessly.
              <strong>
                My work combines cutting-edge technology with creative
                innovation
              </strong>{" "}
              , ensuring every website delivers both beauty and functionality
              for an unforgettable digital experience.
            </p>
          </div>
        </div>
        <div className="skill-item">
          <img className="skill-img" src={Web} alt="WebDesign" />
          <div className="skill-text">
            <h2>Web Designer</h2>
            <p>
              As a web designer, I specialize in{" "}
              <strong>
                crafting visually stunning and user-centric digital experiences
                . My expertise
              </strong>{" "}
              lies in blending creativity with functionality, ensuring every
              design is both aesthetically pleasing and highly intuitive. From
              wireframes to fully responsive layouts, I bring concepts to life,
              delivering designs that captivate and engage users.
            </p>
          </div>
        </div>
        <div className="skill-item">
          <img className="skill-img" src={ReactPic} alt="React" />
          <div className="skill-text">
            <h2>React.js</h2>
            <p>
              <strong>React.js</strong> is a powerful JavaScript library for
              building dynamic, high-performance user interfaces. It enables the
              creation of reusable components, ensuring efficient and scalable
              front-end development.
              <strong>
                {" "}
                With React, I build lightning-fast, interactive applications,
                delivering seamless user experiences while maintaining a clean
                and maintainable codebase
              </strong>{" "}
              .
            </p>
          </div>
        </div>
        <div className="skill-item">
          <img className="skill-img" src={TailwindCSS} alt="Tailwind Css" />
          <div className="skill-text">
            <h2>Tailwind CSS</h2>
            <p>
              <strong>Tailwind CSS</strong> is my preferred framework for
              crafting sleek, responsive, and highly customizable web designs.
              Its utility-first approach empowers me to effortlessly create
              stunning, pixel-perfect layouts, making design both efficient and
              expressive. With Tailwind,{" "}
              <strong>
                {" "}
                I bring modern aesthetics to life, ensuring seamless, adaptive
                user experiences across all devices
              </strong>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
