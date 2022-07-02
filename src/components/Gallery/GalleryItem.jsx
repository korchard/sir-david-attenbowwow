import React from 'react';

// STYLING
import './Gallery.css';

const GalleryItem = (props) => {

  return (
    <div className='galleryItemItem'>
        <div className='galleryItemHeader'>
          {props.gallery?.title}
        </div>
        <div className='galleryItemContent'>
            <img src={props.gallery?.image} alt={props.gallery?.title} className='galleryItemPic'></img>
            <p className='galleryItemDescription'>
                {props.gallery?.description}</p>
        </div>
    </div>
  );
};

export default GalleryItem;