import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Hero from './components/HeroSection/Hero';


const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Sidebar />
      <Hero />
    </div>
  );
};

export default App;
