import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar: React.FC = () => {

  const [theme, setTheme] = useState('dark');

  useEffect(() => {

    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">

      <div className='text-white font-black text-2xl text-accent '>Simple Website</div>

      <ul className="flex justify-center space-x-4">
        <li>
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </li>
      </ul>

      <button className='btn btn-ghost text-white' onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

    </nav>
  );
};

export default Navbar;
