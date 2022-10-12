const galleryData = require('./modules/galleryData');

exports.handler = async function (event, context) {
    return {
      statusCode: 200,
      body: JSON.stringify(galleryData),
    };
  };