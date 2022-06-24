import React from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

// COMPONENTS
import About from '../About/About';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

// STYLING
import './App.css';

function App() {

  return (
    <Router>
        <div className='mainContainer'>
          <div className='headerContainer'>
            <Header />
            <Navbar />
          </div>
            <Switch>
            <Redirect exact from='/' to='/about' />
              <Route
                exact
                path='/about'
                component={About}/>
              <Route
                exact
                path='/gallery'
                component={Gallery}/>
              {/* If none of the other routes matched, we will show a 404. */}
              <Route render={() => <h1 className='error'>404</h1>} />
            </Switch>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
