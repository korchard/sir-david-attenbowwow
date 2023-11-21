import React from 'react';
import PropTypes from 'prop-types';

// STYLING
import './Gallery.css';

const GalleryItem = (props) => {
	return (
		<div className="galleryItemItem">
			<div className="galleryItemHeader">{props.gallery?.title}</div>
			<div className="galleryItemContent">
				<img src={props.gallery?.image} alt={props.gallery?.title} className="galleryItemPic thumbnail"></img>
				<p className="galleryItemDescription">{props.gallery?.description}</p>
			</div>
		</div>
	);
};

GalleryItem.propTypes = {
	gallery: PropTypes.shape({
		title: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
	}),
};

export default GalleryItem;
