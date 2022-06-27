import React from 'react';
import { Link } from 'react-router-dom';

// STYLING
import './Donate.css';

const Donate = () => {

  const coolEarth = () => {
    window.open('https://www.coolearth.org/donate/', '_blank');
  }

  const futureForNature = () => {
    window.open('https://futurefornature.org/donate', '_blank');
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
              <p className='donateDescription'>From their website: "We back people 
              to protect rainforest and fight the climate crisis."</p>
          </div>
          <div className='donateOrg'>
              <Link className='donateLink' to='/donate' onClick={futureForNature}>
                  Future For Nature
              </Link>
              <p className='donateDescription'>From their website: "Future For 
              Nature supports young, talented and ambitious conservationists committed 
              to protecting species of wild animals and plants. The commitment of these 
              individuals is what will make the difference for the future of nature. 
              Through their leadership they inspire and mobilize communities, 
              organizations, governments, investors and the public at large."</p>
          </div>
          <div className='donateOrg'>
              <Link className='donateLink' to='/donate' onClick={worldLandTrust}>
                  World Land Trust
              </Link>
              <p className='donateDescription'>From their website: "World Land Trust (WLT) 
              is an international conservation charity that protects the world’s most 
              biologically significant and threatened habitats. Working through a network 
              of partner organisations around the world, WLT funds the creation of 
              reserves and provides permanent protection for habitats and wildlife. 
              Partnerships are developed with established and highly respected local 
              organisations who engage support and commitment among the local community."</p>
          </div>
          <div className='donateOrg'>
              <Link className='donateLink' to='/donate' onClick={worldWildlifeFund}>
                  World Wildlife Fund
              </Link>
              <p className='donateDescription'>From their website: "Our vision is to 
              build a future in which people live in harmony with nature. To deliver 
              this mission, we work to conserve and restore biodiversity, the web that 
              supports all life on Earth; to reduce humanity’s environmental footprint; 
              and to ensure the sustainable use of natural resources to support current 
              and future generations."</p>
          </div>
        </div>
    </div>
  );
};

export default Donate;