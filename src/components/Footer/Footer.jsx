import React from 'react';
import { Link } from 'react-router-dom';

// COMPONENTS
import Contact from '../Contact/Contact';

// STYLING
import './Footer.css';

// ICONS
// email
import { GoMail } from 'react-icons/go';
//phone
import { FiPhone } from 'react-icons/fi';
// linkedIn
import { IoLogoLinkedin } from 'react-icons/io';
// github
import { IoLogoGithub } from 'react-icons/io';

const Footer = () => {

  const linkedIn = () => {
    window.open('https://www.linkedin.com/in/kimberly-orchard-she-her-49b0171b9/', '_blank');
  }

  const github = () => {
    window.open('https://github.com/korchard', '_blank');
  }

  return (
    <div className='footerItem'>
      <footer>
        <div className='contactInfo'>
          <h2 className='contactHeader'>Reach me at </h2>
          <GoMail className='contactIcon' />
          &nbsp;
          kimberly.a.orchard@gmail.com
          <br></br>
          <br></br>
          <FiPhone className='contactIcon' />
          &nbsp;
          763-443-7105
          <br></br>
          <h2 className='contactHeader'>Or send a message here ----> </h2>
        </div>
        <div className='contactForm'>
          <Contact />
        </div>
        <div className='links'>
          <h2 className='footerName'>Kimberly Orchard</h2>
          <div className='footerLinks'>
            <div>
                <Link className='navLink' to='/work' onClick={linkedIn}>
                    <IoLogoLinkedin />
                    {/* <span className='iconBtn'></span> */}
                </Link>
            </div>
            <div>
                <Link className='navLink' to='/work' onClick={github}>
                    <IoLogoGithub />
                    {/* <span className='iconBtn'></span> */}
                </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;