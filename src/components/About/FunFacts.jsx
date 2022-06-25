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
            <p className='fact'>Favorite Toy</p>
                <br></br>
            <p>Zippy Paws Donuts</p>
        </div>
        <div className='factsContent'>
            <p className='fact'>Favorite Food</p>
                <br></br>
            <p>Cheese</p>
        </div>
        <div className='factsContent'>
            <p className='fact'>Best Friend</p>
                <br></br>
            <p>Luna, a German Shephard, Chihuahua mix</p>
        </div>
        <div className='factsContent'>
            <p className='fact'>Arch Nemesis</p>
                <br></br>
            <p>Windshield Wipers</p>
        </div>
        <div className='factsContent'>
            <p className='fact'>Confidence Level</p>
                <br></br>
            <p>Out of this world</p>
        </div>
        <div className='factsContent'>
            <p className='fact'>Spirit Animal</p>
                <br></br>
            <p>Chicken</p>
        </div>
      </div>
  );
};

export default FunFacts;
