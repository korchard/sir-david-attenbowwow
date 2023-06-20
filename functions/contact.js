// require('dotenv').config();
// const nodemailer = require('nodemailer');

// // NODEMAILER && POST ROUTE to receive an email 
// exports.handler = async function(event, context) {
//     const data = JSON.parse(event.body);

//     let transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             type: 'OAuth2',
//             user: process.env.EMAIL,
//             pass: process.env.PASSWORD,
//             clientId: process.env.OAUTH_CLIENTID,
//             clientSecret: process.env.OAUTH_CLIENT_SECRET,
//             refreshToken: process.env.OAUTH_REFRESH_TOKEN,
//         },
//     });

//     const mailOptions = {
//         from: process.env.EMAIL,
//         to: process.env.EMAIL,
//         subject: `${data.subject}`,
//         html: `<p>${data.message}</p>
//                 <p>Thank you, <br/>
//                 ${data.name}</p>
//                 <p>${data.email}</p>`
//     };

//     try {
//         let result = await transporter.sendMail(mailOptions);
//         return {
//             statusCode: 200,
//             body: JSON.stringify({
//                 'Success': result
//             }, null),
//             headers: {
//                 'Access-Control-Allow-Origin': '*',
//             },
//         };
//     } catch (error) {
//         console.log(error.message)
//         return {
//             statusCode: 500,
//             body: JSON.stringify({
//                 'Error': error
//             }, null),
//             headers: {
//                 'Access-Control-Allow-Origin': '*',
//             },
//         };
//     }
// };

require('dotenv').config();
const nodemailer = require('nodemailer');

exports.handler = function(event, context, callback) {
    let data = JSON.parse(event.body)

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        auth:{
         user: process.env.EMAIL,
         pass: process.env.PASSWORD
    }
    });

    transporter.sendMail({
        from: data.email,
        to: process.env.EMAIL,
        subject: `${data.subject}`,
        html: `<p>${data.message}</p>
                <p>Thank you, <br/>
                ${data.name}</p>`
    }, function(error, info) {
        if (error) {
            callback(error);
        } else {
            callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                   'result': 'success'
                })
        });
        }
    });
}
