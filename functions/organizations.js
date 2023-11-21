const organizationData = require('./modules/organizationData');

exports.handler = async function () {
	return {
		statusCode: 200,
		body: JSON.stringify(organizationData),
	};
};
