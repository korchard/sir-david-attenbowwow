import React from 'react';
import { Link } from 'react-router-dom';

// STYLING
import './Donate.css';

const Organization = (props) => {

    const goToOrg = (link) => {
        window.open(encodeURI(link), '_blank');
      }

  return (
    <div className='donateOrg'>
        <Link className='donateLink' to='/donate' onClick={goToOrg(props.org?.link)}>
            {props.org?.title}
        </Link>
        <p className='donateDescription'>
            A description from their website: 
            "{props.org?.description}"
        </p>
    </div>
  );
};

export default Organization;