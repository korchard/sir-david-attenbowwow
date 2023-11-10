import React from 'react';
import { Link } from 'react-router-dom';

// COMPONENTS
import Contact from '../Contact/Contact';

// STYLING
import './Footer.css';

// ICONS
// email
import { GoMail } from 'react-icons/go';
// instagram
import { FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
	const instagram = () => {
		window.open(
			'https://www.instagram.com/sir_david_attenbowwow/?hl=en',
			'_blank'
		);
	};

	return (
		<div className="footerItem">
			<footer>
				<div className="contactInfo">
					<h2 className="contactHeader">Find Davey </h2>
					<div className="contactLinks">
						<GoMail className="contactIcon" />
						&nbsp; sirdavidattenbowwow@gmail.com
					</div>
					<br></br>
					<div className="contactLinks">
						<Link to="/about" onClick={instagram} className="instagram">
							<FaInstagramSquare />
							&nbsp; @sir_david_attenbowwow
						</Link>
					</div>
					<h2 className="contactHeader">Or send a message here --{'>'} </h2>
				</div>
				<div className="contactForm">
					<Contact />
				</div>
				<div className="footerImage">
					<img src="../images/daveyCool.png" alt="Davey" id="daveyCool"></img>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
