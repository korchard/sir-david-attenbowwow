require('dotenv').config();
const nodemailer = require('nodemailer');

// NODEMAILER && POST ROUTE to receive an email 
exports.handler = async function(event, context) {
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

    let result = await transporter.sendMail(mailOptions)
    // return {
    //     statusCode: 200,
    //     body: JSON.stringify({
    //         "Success": results
    //     }, null),
    //     headers: {
    //        'Access-Control-Allow-Origin': '*',
    //    },
    // };
    .then( response => {

        console.log(`Success - ${response}`);
        
        return {
            statusCode: 200,
            body: JSON.stringify({ "Success": response }, null),
            headers: {
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Credentials': true,
           },
        };    
        
    })
    .catch ( error => {
        console.log(`Error - ${error}`);
        
        return {
            statusCode: 500,
            body: JSON.stringify({ "Error": error }, null),
            headers: {
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Credentials': true,
           },
        };    
        
    })
};