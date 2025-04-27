import React, { useState, useEffect } from 'react';
import './Hero.css';
import profilePic from '../../assets/profile.jpg';

const skills = [
  "Front-End Developer",
  "React Developer",
  "UI/UX Enthusiast",
  "IoT Developer"
];

const Hero = () => {
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>I'm Mudassir Nadeem</h1>
        <h2>{skills[currentSkill]}</h2>
        <p>
          Passionate about building sleek and user-friendly websites and applications. 
          I specialize in React and modern web development practices.
        </p>
        <a href="mailto:ohmudassir@gmail.com" className="hire-me-btn">Hire Me</a>
      </div>
      <div className="hero-image">
        <img src={profilePic} alt="Mudassir Nadeem" />
      </div>
    </section>
  );
};

export default Hero;
