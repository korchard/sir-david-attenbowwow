const galleryData = require('./modules/galleryData');

export const handler = async function () {
	return {
		statusCode: 200,
		body: JSON.stringify(galleryData),
	};
};
