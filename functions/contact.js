require('dotenv').config();
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const nodemailer = require('nodemailer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// NODEMAILER && POST ROUTE to receive an email 
router.post('/', async (req, res) => {
    console.log('email', req.body);
    const data = req.body;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        },
    });

    const mailOptions = {
        from: `sirdavidattenbowwow@gmail.com`,
        to: `sirdavidattenbowwow@gmail.com`,
        subject: `${data.subject}`,
        html: `<p>${data.message}</p>
                <p>Thank you, <br/>
                ${data.name}</p>
                <p>${data.email}</p>`
    };
    
    let result = await transporter.sendMail(mailOptions)
    .then( response => {
        return {
            statusCode: 200,
            body: JSON.stringify({ "Success": response }, null),
        };    
    })
    .catch ( error => {
        return {
            statusCode: 500,
            body: JSON.stringify({ "Error": error }, null),
        };    
    })
    res.send(result)
});

// app.use('/api/contact', router)
// return serverless(app)(event, context).then(result => {
//     return result
// })
// }

app.use('/api/contact', router);

module.exports = app;
module.exports.handler = serverless(app)