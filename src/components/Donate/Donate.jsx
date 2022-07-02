import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// STYLING
import './Donate.css';

const Donate = () => {
    const dispatch = useDispatch();
    const org = useSelector((redux) => redux);

  useEffect(() => {
      dispatch({ type: 'GET_ORGANIZATIONS' });
  }, [dispatch]);

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
    <div className='donateItem'>
        <div className='donateHeader'>
            Organizations that Davey Supports
        </div>
        <div className='donateSubHeader'>
            ( Click to Donate )
        </div>
        <div className='donateContent'>
        <div className='donateOrg'>
              <Link className='donateLink' to='/donate' onClick={coolEarth}>
                  Cool Earth
              </Link>
              <p className='donateDescription'>From their website: "We champion 
              the relationship between people, rainforest and climate.
              <br></br>
              <br></br>
              Cool Earth exists to give cash direct to rainforest communities, 
              to fund projects that create choice, tackle the root causes of 
              deforestation and protect vital carbon sinks.
              <br></br>
              <br></br>
              This is our mission. To back people, to protect the rainforest 
              and fight the climate crisis."</p>
          </div>

        </div>
    </div>
  );
};

export default Donate;