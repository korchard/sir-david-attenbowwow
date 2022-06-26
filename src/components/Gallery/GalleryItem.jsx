import React, { useState } from 'react';

// STYLING
import './Gallery.css';

const GalleryItem = (props) => {
  const [image, setImage] = useState(true);

  const toggleImage = () => {
    setImage(!image)  
  }

  return (
    <div className='galleryItem'>
        <div className='galleryHeader'>
          {props.gallery?.title}
        </div>
        {image ?
          <img src={props.gallery?.image} alt='Davey Adventure' className='galleryPic'
                onClick={toggleImage}></img> :
          <p className='galler= 6wqyDescription' onClick={toggleImage}>
            {props.gallery?.decription}</p> 
        }  
    </div>
  );
};

export default GalleryItem;