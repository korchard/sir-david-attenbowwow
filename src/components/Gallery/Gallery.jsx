import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// COMPONENTS
import GalleryItem from './GalleryItem';

// STYLING
import './Gallery.css';

const Gallery = () => {
    const dispatch = useDispatch();
    const gallery = useSelector((redux) => redux.gallery);

useEffect(() => {
    dispatch({ type: 'GET_GALLERY' });
}, [dispatch]);

  return (
    <div className='galleryItem'>
      <div className='galleryHeader'>
        Davey's Adventures
      </div>
      <div className='galleryContent'>
        {gallery?.map((item) => {
            return (
                <GalleryItem key={item.id} gallery={item} className="item"/>
                );
            })}
      </div>
    </div>
  );
};

export default Gallery;