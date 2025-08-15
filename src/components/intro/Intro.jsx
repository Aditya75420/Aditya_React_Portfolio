import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import pic from '../../assets/Pic.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={pic} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5 Completed Projects</small>
            </article>
          </div>
          <p>Hi, I’m Aditya Kumar — a CSE undergrad at RGPV University, Bhopal, and a passionate full-stack developer. I love turning ideas into real, functional projects using the MERN Stack, Flutter, and other modern tech tools.

I’ve built cool stuff like an AI-powered resume builder and a learning management system, and I’m always exploring new ways to improve my skills. Outside of coding, you’ll usually find me playing football or geeking out over the latest tech trends.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro