const organizationData = require('./modules/organizationData');

exports.handler = async function (event, context) {
    return {
      statusCode: 200,
      body: JSON.stringify(organizationData),
    };
  };