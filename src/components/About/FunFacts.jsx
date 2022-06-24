import React from 'react';

// STYLING
import './About.css';

const FunFacts = () => {

  return (
      <div className='aboutFacts'>
        <div className='factsHeader'>
            Fun Facts
        </div>
        <div className='factsContent'>
            <p className='fact'>Location</p>
                <br></br>
            <p>Minneapolis, MN</p>
        </div>
        <div className='factsContent'>
            <p className='fact'>Superpower</p>
                <br></br>
            <p>Bridging gaps</p>
        </div>
        <div className='factsContent'>
            <p className='fact'>Reading</p>
                <br></br>
            <p>The Midnight Library by Matt Haig</p>
        </div>
        <div className='factsContent'>
            <p className='fact'>Favorite Word</p>
                <br></br>
            <p>Ecopsychology</p>
        </div>
        <div className='factsContent'>
            <p className='fact'>Current Creative Outlet</p>
                <br></br>
            <p>Refurbishing furniture</p>
        </div>
        <div className='factsContent'>
            <p className='fact'>Spirit Animal</p>
                <br></br>
            <p>Deer</p>
        </div>
      </div>
  );
};

export default FunFacts;
