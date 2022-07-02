import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// COMPONENTS
import Organization from './Organization';

// STYLING
import './Donate.css';

const Donate = () => {
    const dispatch = useDispatch();
    const org = useSelector((redux) => redux.organizations);

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
            ( Click on Organization to Donate )
        </div>
        <div className='donateContent'>
          {org?.map((item) => {
              return (
                  <Organization key={item.id} org={item}/>
                  );
              })}
        </div>
    </div>
  );
};

export default Donate;