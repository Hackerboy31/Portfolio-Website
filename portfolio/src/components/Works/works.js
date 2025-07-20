import React from "react";
import "./works.css";
import Spotify from "../../assets/Spotify.png";
import Logo from "../../assets/Logo.jpeg";
import Health from "../../assets/Health.png";

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
      <div className="skill-item">
        <img className="skill-img" src={Health} alt="Healthbridge" />
        <div className="skill-text">
          <h1>Healthbridge</h1> <strong>Try the Website for User:</strong>{" "}
          <a
            style={{ color: "yellow" }}
            href="https://healthbridge-frontend-6whf.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            Link
          </a>{" "}
          <br />
          <strong>Try the Website for admin and doctor:</strong>{" "}
          <a
            style={{ color: "yellow" }}
            href="https://healthbridge-admin-t5jx.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            Link
          </a>
          <p>
            <strong> • For Admin :- </strong> email: example@gmail.com,
            password: Shaurya@1234
          </p>
          <p>
            <strong> • Role-Based Multi-Panel Architecture :- </strong>{" "}
            Architected a modular healthcare platform featuring separate panels
            for Admin, User, and Doctor, ensuring streamlined user experiences
            and role-specific functionalities using MERN stack best practices.
          </p>
          <p>
            <strong> • Appointment Booking Payment Flow :- </strong>mplemented a
            secure appointment booking system with Ra- zorpay payment
            integration, allowing users to book consultations and complete
            online transactions via JWT- authenticated sessions.
          </p>
          <p>
            <strong> • Doctor Profile Earnings Managemen :- </strong> Enabled
            doctors to update profiles, manage appointment sta- tuses
            (completed/cancelled), and view earnings through protected backend
            routes and MongoDB aggregation techniques.
          </p>
          <p>
            <strong> • Admin Doctor Management System :- </strong> Developed an
            admin interface to register new doctors, monitor their availability,
            and track earnings analytics, leveraging RESTful APIs and React
            state management for real-time data updates
          </p>
          <p>
            <strong> • Authentication Access Control :- </strong> Established
            secure token-based authentication using JWT and middleware- driven
            role-based authorization, ensuring protected access across all
            application panels.
          </p>
        </div>
      </div>

      <div className="skill-bar">
        <div className="skill-item">
          <img className="skill-img" src={Logo} alt="SpotifyApp" />
          <div className="skill-text">
            <h1>Hotel Booking Website</h1> <strong>Try the Website</strong>{" "}
            <a
              style={{ color: "yellow" }}
              href="https://readytobook-h4zixpad1-hacker3120s-projects.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Link
            </a>
            <p>
              <strong> • Login-Gated Hotel Registration :- </strong> Designed a
              secure flow requiring users to log in before accessing hotel
              registration, ensuring only authenticated users can register
              properties and manage listings, enhancing platform integrity and
              data security.{" "}
            </p>
            <p>
              <strong>• Hotel Registration Feature :- </strong> Implemented a
              secure hotel registration system enabling users to register their
              hotels with essential details, supporting authentication and
              ownership verification through token-based access using modern
              MERN stack practices.
            </p>
            <p>
              <strong> • Room Booking System :- </strong> Created a dynamic
              hotel room booking system where users can check availability, view
              room details, and make secure bookings with real-time updates and
              database integration for reliability.
            </p>
            <p>
              <strong> • mail Confirmation Integration :- </strong> Integrated
              automated email notifications to confirm hotel bookings, using a
              transactional email service (like Nodemailer), enhancing user
              trust and communication after each successful transaction.
            </p>
          </div>
        </div>

        <div className="skill-item">
          <img className="skill-img" src={Spotify} alt="Spotify_Clone" />
          <div className="skill-text">
            <h1>Spotify clone</h1> <strong>Github:</strong>{" "}
            <a
              style={{ color: "yellow" }}
              href="https://github.com/Hackerboy31/Spotify"
              target="_blank"
              rel="noreferrer"
            >
              Link
            </a>
            <p>
              <strong> • Music Library:</strong> Provide users with a collection
              of songs, albums, and artists to explore and play.
            </p>
            <p>
              <strong> • Playback Controls :- </strong> Include essential
              controls such as play, next, and previous for a smooth listening
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
