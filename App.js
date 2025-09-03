import React, { useState, useEffect } from 'react';
import './themes.css';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <h1>Theme Change App</h1>

      <label className="toggle-switch" aria-label="Toggle theme">
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={theme === 'dark'}
        />
        <span className="slider"></span>
      </label>

      <p>Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode</p>

      <span className="emoji" role="img" aria-label="Theme emoji">
        {theme === 'light' ? '☀️' : '🌙'}
      </span>
    </div>
  );
}

export default App;