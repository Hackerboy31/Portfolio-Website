import React from "react";
import "./works.css";
import Buzzr from "../../assets/Buzzr.jpeg";
import Spotify from "../../assets/Spotify.png";
import Task from "../../assets/Task.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="works-title">Portflio</h2>
      <span className="works-descript">
        Welcome to my portfolio! I’m a passionate web developer with expertise
        in both front-end and back-end technologies. I specialize in creating
        responsive, dynamic, and visually appealing web applications that
        deliver a seamless user experience. With proficiency in HTML, CSS,
        JavaScript, React.js, Node.js, Express.js, MongoDB, and Tailwind CSS,
        I’m committed to building projects that not only meet functional
        requirements but also provide aesthetic value.
      </span>
      <div className="skill-bar">
      <div className="skill-item">
          <img className="skill-img" src={Spotify} alt="SpotifyApp" />
          <div className="skill-text">
            <h1>Spotify Clone</h1> <strong>Github:</strong>{" "}
            <a style={{ color: "yellow" }} href="https://github.com/Hackerboy31/Spotify" target="_blank">Link</a>
            <p>
              <strong> • Music Library:</strong> Provide users with a collection
              of songs albums, and artists to explore and play.{" "}
            </p>
            <p>
              <strong>• Playback Controls:</strong> Include essential controls
              such as play, next, and previous for a smooth listening
              experience.
            </p>
            <p>
              <strong> • Responsive Design:</strong> Ensure a seamless and
              adaptive user experience across all devices, including desktops,
              tablets, and smartphones.
            </p>
          </div>
        </div>
        <div className="skill-item">
          <img className="skill-img" src={Buzzr} alt="BuzzrApp" />
          <div className="skill-text">
            <h1>Buzzr Application</h1> <strong>Github:</strong>{" "}
            <a style={{ color: "yellow" }} href="https://github.com/Hackerboy31/buzzr-server-main" target="_blank">Link</a>
            <p>• An online multiplayer quizzing platform that hosts real-time quizzes, handled 150+ simultaneous users.</p>
            <p>
              • Implemented Google OAuth Authentication using the Next-Auth
              library for secure user authentication.
            </p>
            <p>
              • Utilised Server Actions to integrate database queries into the
              application for SSR.
            </p>
          </div>
        </div>
        
        <div className="skill-item">
          <img className="skill-img" src={Task} alt="Task Management" />
          <div className="skill-text">
            <h1>Task Management System</h1> <strong>Github:</strong>{" "}
            <a style={{ color: "yellow" }} href="https://github.com/Hackerboy31/Task-Management" target="_blank">Link</a>
            <p style={{ color: "orange" }}> <strong>Currently I am working on this project , some key Features of this project are :</strong></p>
            <p>
              <strong>• Authentication:</strong> Users can sign up, log in, and
              manage their account.
            </p>
            <p>
              <strong>• Task Management:</strong> Users can create, update, and
              delete tasks.
            </p>
            <p>
              <strong>• Task Status:</strong> Users can mark tasks as completed
              or incomplete.
            </p>    
            <p style={{ color: "orange" }}>Many more features are added in this project when the project is completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
