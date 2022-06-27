import React, { useState } from 'react';

// STYLING
import './Gallery.css';

const GalleryItem = (props) => {
//   const [image, setImage] = useState(true);

//   const toggleImage = () => {
//     setImage(!image)  
//   }

  return (
    <div className='galleryItemItem'>
        <div className='galleryItemHeader'>
          {props.gallery?.title}
        </div>
        <div className='galleryItemContent'>
            <img src={props.gallery?.image} alt='Davey Adventure' className='galleryItemPic'></img>
            <p className='galleryItemDescription'>
                {props.gallery?.description}</p>
        </div>
        {/* {image ?
          <img src={props.gallery?.image} alt='Davey Adventure' className='galleryItemPic'
                onClick={toggleImage}></img> :
          <p className='galleryItemDescription' onClick={toggleImage}>
            {props.gallery?.description}</p> 
        }   */}
    </div>
  );
};

export default GalleryItem;