require('dotenv').config();
const nodemailer = require('nodemailer');

// NODEMAILER && POST ROUTE to receive an email 
exports.handler = async function(event, context) {
    console.log('email', event.body);
    const data = JSON.parse(event.body);

    if (!event.body) {
        return {
          statusCode: 400,
          body: JSON.stringify({
            'Error': 'Missing request body'
          }),
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        };
      }

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `${data.subject}`,
        html: `<p>${data.message}</p>
                <p>Thank you, <br/>
                ${data.name}</p>
                <p>${data.email}</p>`
    };

    try {
        let result = await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({
                'Success': result
            }, null),
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        };
    } catch (error) {
        console.log(error.message)
        return {
            statusCode: 500,
            body: JSON.stringify({
                'Error': error
            }, null),
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        };
    }
};