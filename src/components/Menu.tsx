import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Menu: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="menu">

        {/* Desktop menu */}
        <ul className="hidden lg:flex text-lg">
            <li>
                <Link to="/" className="text-base-content">Home</Link>
            </li>
            <li>
                <Link to="/about" className="text-base-content">About</Link>
            </li>
            <li>
                <Link to="/contact" className="text-base-content">Contact</Link>
            </li>
        </ul>

        {/* Mobile menu - hamburger */}

        <div className='lg:hidden'>
          <button className="btn btn-ghost" onClick={toggleMenu}>
            <FaBars className='h-5 w-5' />
          </button>
        </div>

        {/* Mobile menu - Modal */}

        {isMenuOpen && (
            <div className="modal modal-open">
            <div className="modal-box">
              <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={toggleMenu}>
                <FaTimes />
              </button>
              <ul className="menu menu-vertical mt-4 text-lg">
                <li className="menu-title">Menu</li>
                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
              </ul>
            </div>
          </div>
        )}

    </div>
    
  );
};

export default Menu;
