import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default App;
