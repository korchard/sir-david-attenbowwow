import React from 'react';
import { Link } from 'react-router-dom';

// STYLING
import './Donate.css';

const Organization = (props) => {

    const coolEarth = () => {
        window.open('https://www.coolearth.org/donate/', '_blank');
      }
    
      const futureForNature = () => {
        window.open('https://futurefornature.org/donate', '_blank');
      }
    
      const saveTheBoundaryWaters = () => {
        window.open('https://www.savetheboundarywaters.org/donate', '_blank');
      }
    
      const treesWaterPeople = () => {
        window.open('https://treeswaterpeople.org/donate', '_blank');
      }
    
      const worldLandTrust = () => {
        window.open('https://www.worldlandtrust.org/product/action-fund/', '_blank');
      }
    
      const worldWildlifeFund = () => {
        window.open('https://support.worldwildlife.org/site/SPageServer?pagename=main_monthly&s_src=AWE2209OQ18299A01179RX&s_subsrc=topnav', '_blank');
      }

  return (
    <div className='donateOrg'>
        <Link className='donateLink' to='/donate' onClick={props.org?.link}>
            {props.org?.title}
        </Link>
        <p className='donateDescription'>
            {props.org?.description}
        </p>
    </div>
  );
};

export default Organization;