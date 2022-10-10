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
            <p className='fact'>Perfect Day</p>
                <br></br>
            <p>Out on the boat</p>
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
            <p className='fact'>Nick Names</p>
                <br></br>
            <p>Miseur Pumpkin Pants, Chicken, Handsome Devil, My Sweetie, Critter</p>
        </div>
        <div className='factsContent'>
            <p className='fact'>Spirit Animal</p>
                <br></br>
            <p>Otter</p>
        </div>
      </div>
  );
};

export default FunFacts;
