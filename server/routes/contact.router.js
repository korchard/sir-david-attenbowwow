require('dotenv').config();
const express = require('express');
const router = express.Router();
// const nodemailer = require('nodemailer');

// NODEMAILER && POST ROUTE to receive an email 
router.post('/', (req, res) => {
    console.log('email', req.body);
    // const data = req.body;
    // const email = process.env.email;
    // const password = process.env.password;
    // const clientId = process.env.clientId;
    // const clientSecret = process.env.clientSecret;
    // const refreshToken = process.env.refreshToken;
  
    // const smtpTransport = nodemailer.createTransport({
    //     host: 'smtp.gmail.com',
    //     port: 587,
    //     secure: false,
    //     service: 'gmail',
    //     auth: { 
    //         type: 'OAuth2',
    //         user: email,
    //         // pass: password,
    //         clientId: clientId,
    //         clientSecret: clientSecret,
    //         refreshToken: refreshToken
    //     },
    // });

    // smtpTransport.verify(function(error, success) {
    //     if (error) {
    //       console.log(error);
    //     } else {
    //       console.log('Server is ready!');
    //     }
    //   });
  
    // const mailOptions = {
    //     from: `${data.email_address}`,
    //     to: `sirdavidattenbowwow@gmail.com`,
    //     subject: `${data.subject}`,
    //     html: `<p>${data.message}</p>
    //             <p>Thank you, ${data.name}</p>`
    // };

    // smtpTransport.sendMail(mailOptions,
    //     (error, response) => {
    //         if (error) {
    //             console.log('Error!', error);
    //         } else {
    //             console.log('Success!');
    //         }
    //         smtpTransport.close();
    // });

});

module.exports = router;