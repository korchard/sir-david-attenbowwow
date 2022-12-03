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
export async function handler(event, context) {
    // const app = express();
    // const bodyParser = require('body-parser');
    // const router = express.Router();
    // const nodemailer = require('nodemailer');

    // app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({ extended: true }));

    router.post('/', (req, res) => {
        console.log('email', event.body);
        const data = event.body;

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

        // transporter.verify((err, success) => {
        //     err
        //     ? console.log(err)
        //     : console.log(`=== Server is ready to take messages: ${success} ===`);
        // });
    
        const mailOptions = {
            from: `${data.email}`,
            to: process.env.EMAIL,
            subject: `${data.subject}`,
            html: `<p>${data.message}</p>
                    <p>Thank you, <br/>
                    ${data.name}</p>
                    <p>${data.email}</p>`
        };

        // transporter.sendMail(mailOptions,
        //     (error, response) => {
        //         if (error) {
        //             console.log(`Error - ${err}`);
        //             res.send(error)
        //         } else {
        //             console.log(`Success!`);
        //             res.send(response)
        //         }
        //         transporter.close();
        // });
        return transporter.sendMail(mailOptions)
        .then( response => {

            console.log(`Success - ${response}`);
            
            return {
                statusCode: 200,
                body: JSON.stringify({ "Success": response }, null),
            };    
            
        })
        .catch ( error => {
            console.log(`Error - ${error}`);
            
            return {
                statusCode: 500,
                body: JSON.stringify({ "Error": error }, null),
            };    
            
        })
    });

    app.use('/api/contact', router)
    return serverless(app)(event, context).then(result => {
        return result
    })
}

// app.use('/api/contact', router);

// module.exports = app;
// module.exports.handler = serverless(app)