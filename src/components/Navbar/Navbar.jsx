import React from 'react';
import { Link } from 'react-router-dom';

// STYLING
import './Navbar.css';

const Navbar = () => {

  return (
    <div className='navLinks'>
        <div>
            <Link className='navLink' to='/about'>
                {/* <SiAboutDotMe /> */}
                <span className='iconBtn'>About</span>
            </Link>
        </div>
        <div>
            <Link className='navLink' to='/gallery'>
                {/* <FaPhoenixFramework /> */}
                <span className='iconBtn'>Gallery</span>
            </Link>
        </div>
    </div>
  );
};

export default Navbar;