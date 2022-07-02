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