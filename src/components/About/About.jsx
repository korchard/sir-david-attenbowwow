import React, { useState } from 'react';

// COMPONENTS
import AnimatedText from './AnimatedText';
import FunFacts from './FunFacts';

// STYLING
import './About.css';

const About = () => {
    // const [image, setImage] = useState(true);

    // const toggleImage = () => {
    //     setImage(!image)  
    // }

  return (
      <>
    <div className='aboutItem'>
      <div className='aboutContent'>
          <div className='aboutHeader'>
            I am a &nbsp;
            <AnimatedText />.
          </div>
          <div className='aboutBio'>
            <img src='../images/me0.jpeg' alt='me' className='aboutImg'></img>
            <p className='aboutInfo'>
            Interested in all things yoga, Reiki, Ayurveda, circus, refurbishing furniture, 
            wildness, and community building. If you want to discuss any of the above interests, 
            and how the skills learned with these practices apply in other areas, please 
            reach out.
            <br></br>
            <br></br>
            Kimberly is a passionate woman whose areas of expertise include: communication and 
            relationships. She is interested in elevating an eco-centered relationship with 
            technology by supporting environmental causes, understanding the impact of technology 
            on the human psyche, and growing and applying technology ethically. It is 
            important to her to support organizations and projects that promote healing 
            environmental practices, inspiration, and community building.
            <br></br>
            <br></br>
            Recently, Kimberly rapidly developed her software skills while learning at Prime 
            Digital Academy. She continued her education as an intern with F3 Wireless, learning 
            embedded software. Her interest is to eventually become involved in more creative 
            projects, and for now, she is curiously growing her web development skills.
            <br></br>
            <br></br>
            Communication and interpersonal skills are high in her values system. She has 
            worked with several organizations and trained in practices which support problem solving,
            critical thinking, and leadership skills. Such as Radical Joy for Hard Times, the Windhorse Model, 
            Non-violent communication, the Way of Council, Joanna Macy's grief and despair work, 
            and Mark Coleman's ecotherapy practices.
            <br></br>
            <br></br>
            In her free time she enjoys dancing, movement practices, cultivating space, and craftily 
            making things up as she goes. More than the outcome, she simply enjoys working with 
            materials, learning their properties and qualities, and later down the road applying 
            what she knows in unique ways. 
            </p>
            {/* <img src='../images/me0.jpeg' alt='me' className='aboutImg'></img> */}
          </div>
      </div>
        <FunFacts />
    </div>
    {/* <div className='BWCAContent'> */}
        {/* {image ?
            <img src='../images/BWCA2021.jpg' alt='Boundary Waters 2021' className='BWCAImg'
                onClick={toggleImage}></img> :
            <div className='BWCA' onClick={toggleImage}>
                <p> */}
                    {/* The Boundary Waters Canoe Area is a special place I visit annually. This
                    photo was taken 2021 on Omega Lake.
                    <br></br> */}
                    {/* <br></br>
                    "I know that I was born a creature but of a day, 
                    <br></br>
                    and when tangled stars in mind I trace,
                    <br></br>
                    I feast upon ambrosia,
                    <br></br>
                    nourished as the Gods themselves."
                </p> 
                <p>-Unknown Greek Poet</p>
            </div>
        }   */}
    {/* </div> */}
    </>
  );
};

export default About;
