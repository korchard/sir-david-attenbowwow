require('dotenv').config();
const nodemailer = require('nodemailer');

// NODEMAILER && POST ROUTE to receive an email 
exports.handler = async function(event, context) {
    const data = JSON.parse(event.body);

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth:{
         user: process.env.EMAIL,
         pass: process.env.PASSWORD
    }
    });

    const mailOptions = {
        from: data.email,
        to: process.env.EMAIL,
        subject: `${data.subject}`,
        html: `<p>${data.message}</p>
                <p>Thank you, <br/>
                ${data.name}</p>`
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