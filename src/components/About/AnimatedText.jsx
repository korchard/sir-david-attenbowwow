import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

// STYLING
import './About.css';
 
const AnimatedText = () => {
  return (
    <>
      <ReactTypingEffect
        text={['Software Engineer', 'Maker', 'Artist', 'Collaborator']}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        speed={200}
        eraseSpeed={100}
        eraseDelay={100}
        typingDelay={200}
        displayTextRenderer={(text, i) => {
          return (
            <h1 className='animatedText'>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }} />
    </>
  );
};

export default AnimatedText; 