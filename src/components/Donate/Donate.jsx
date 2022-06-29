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
              <Link className='donateLink' to='/donate' onClick={saveTheBoundaryWaters}>
                  Save the Boundary Waters
              </Link>
              <p className='donateDescription'>From their website: "Northeastern 
              Minnesotans for Wilderness (NMW), which leads the Campaign to Save 
              the Boundary Waters, was formed in 1996 to continue working to protect 
              the Boundary Waters and other wild places against ever-increasing public 
              and commercial pressures so that the area’s wild character remains intact 
              for future generations. In September 2013, the national coalition, called 
              the Campaign to Save the Boundary Waters, was formed to create a national 
              movement to protect the Boundary Waters from sulfide-ore copper mining. 
              It is led and funded by NMW. 
              <br></br>
              <br></br>
              Today, NMW is the largest conservation organization in Minnesota that 
              focuses on protecting and preserving the Boundary Waters and greater 
              Quetico-Superior region."</p>
          </div>
          <div className='donateOrg'>
              <Link className='donateLink' to='/donate' onClick={treesWaterPeople}>
                  Trees, Water, People
              </Link>
              <p className='donateDescription'>From their website: "Our mission is 
              to improve people's lives by helping communities protect, conserve, 
              and manage the natural resources upon which their long-term well-being 
              depends."</p>
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