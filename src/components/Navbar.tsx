import React from 'react';
import { useState, useEffect } from 'react';
import Menu from './Menu';


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
    <nav className="bg-base-200 p-4 flex justify-between items-center">

      <div className='font-black text-2xl text-accent'>Simple Website</div>

      <Menu />

      <button className='btn btn-ghost' onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

    </nav>
  );
};

export default Navbar;
