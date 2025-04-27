import React from 'react';
import './Sidebar.css';
import profilePic from '../../assets/profile.jpg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Profile Section */}
      <div className="profile">
        <div className="online-status">
          <span className="online-dot"></span>
        </div>
        <img src={profilePic} alt="Profile" />
        <h2>Mudassir Nadeem</h2>
        <p>Front-end Developer</p>
      </div>

      {/* Personal Information */}
      <div className="info">
        <div className="info-item">
          <strong>Name:</strong> Mudassir Nadeem
        </div>
        <div className="info-item">
          <strong>Age:</strong> 22
        </div>
        <div className="info-item">
          <strong>Freelance:</strong> <span className="available">Available</span>
        </div>
        <div className="info-item">
          <strong>Residence:</strong> Bahawalnagar, Pakistan
        </div>
        <div className="info-item">
  <strong>Email:</strong> <a href="mailto:ohmudassir@gmail.com">Contact me via email</a>
</div>

      </div>

      {/* Languages */}
      <div className="section">
        <h3>Languages</h3>
        <div className="skill">
          <span>English</span>
          <div className="progress-bar"><div style={{ width: '80%' }}></div></div>
        </div>
        <div className="skill">
          <span>Urdu</span>
          <div className="progress-bar"><div style={{ width: '100%' }}></div></div>
        </div>
      </div>

      {/* Skills */}
      <div className="section">
        <h3>Skills</h3>
        <div className="skill">
          <span>IoT Automation (Arduino, ESP)</span>
          <div className="progress-bar"><div style={{ width: '100%' }}></div></div>
        </div>
        <div className="skill">
          <span>HTML</span>
          <div className="progress-bar"><div style={{ width: '90%' }}></div></div>
        </div>
        <div className="skill">
          <span>CSS</span>
          <div className="progress-bar"><div style={{ width: '85%' }}></div></div>
        </div>
        <div className="skill">
          <span>JavaScript</span>
          <div className="progress-bar"><div style={{ width: '80%' }}></div></div>
        </div>
        <div className="skill">
          <span>React</span>
          <div className="progress-bar"><div style={{ width: '75%' }}></div></div>
        </div>
      </div>

      {/* Extra Skills */}
      <div className="section">
        <h3>Extra Skills</h3>
        <ul>
          <li><i className="fas fa-desktop"></i> Desktop Application</li>
          <li><i className="fas fa-laptop-code"></i> Web Development</li>
          <li><i className="fas fa-table"></i> Excel Dashboard/Cleaning</li>
        </ul>
      </div>

      {/* Download CV Button */}
      <button className="download-btn"><a href="/cv/Mudassir_Nadeem.pdf" download="Mudassir_Nadeem_CV.pdf">
    Download CV
  </a></button>
    </div>
  );
};

export default Sidebar;
