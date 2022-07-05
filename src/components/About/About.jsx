import React from 'react';

// COMPONENTS
import AnimatedText from './AnimatedText';
import FunFacts from './FunFacts';

// STYLING
import './About.css';

const About = () => {

  return (
      <>
      <div className='aboutItem'>
        <div className='aboutContent'>
            <div className='aboutHeader'>
              I am &nbsp;
              <AnimatedText />.
            </div>
            <div className='aboutBio'>
              <img src='../images/daveySteamboat.jpg' alt='Davey near Steamboat Lake' className='aboutImg'></img>
              <p className='aboutInfo'>
              Hello, friends! I am here to encourage you to consider your relationship to this 
              beautiful planet that we exist within, to foster your own ecological identity, and 
              choose to live in cooperation with, and appreciation for, our planet Earth. My namesake,
              Sir David Attenborough, summarizes my hope succinctly:
              <br></br>
              <br></br>
              "An understanding of the natural world is a source of not only great curiosity, 
              but great fulfilment."
              <br></br>
              <br></br>
              I reside in Minneapolis, MN with my paw-rents, Kimberly and Eddy, both of whom value 
              living in reciprocity with Earth. They are continually working towards educating 
              themselves around how they can be better stewards of this planet through growing their 
              own food, catching their own water, developing passive solar heating, and generally 
              trialing different ways to make their home more sustainable. This has influenced my 
              own understanding and relationship to helping the planet. 
              <br></br>
              <br></br>
              The way in which I can help is by continuing to bring awareness to organizations and 
              causes that are supporting sustainability and conservation. 
              <br></br>
              <br></br>
              Generally speaking, I am a sweet, opinionated, vocal fluff ball who loves to swim, 
              ride in the boat while my paw-rents paddle, romp around in the underbrush, and 
              adventure.
              </p>
            </div>
        </div>
          <FunFacts />
      </div>
        
    </>
  );
};

export default About;
