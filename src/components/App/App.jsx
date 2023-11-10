import React from 'react';
import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from 'react-router-dom';

// COMPONENTS
import About from '../About/About';
import Donate from '../Donate/Donate';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

// STYLING
import './App.css';

function App() {
	return (
		<Router>
			<div className="mainContainer">
				<div className="headerContainer">
					<Header />
					<Navbar />
				</div>
				<Routes>
					<Route path="/" element={<Navigate to="/about" />} />
					<Route path="/about" element={<About />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/donate" element={<Donate />} />
					{/* If none of the other routes matched, we will show a 404. */}
					<Route path="*" element={<h1 className="error">404</h1>} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
