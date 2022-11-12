require('dotenv').config();
// const serverless = require('serverless-http');
// const app = express();
// const bodyParser = require('body-parser');
// const router = express.Router();
const nodemailer = require('nodemailer');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// NODEMAILER && POST ROUTE to receive an email 
exports.handler =  async function(event, context, callback) {
    // router.post('/', (req, res) => {
    console.log('email', event.body);
    const data = event.body;
    // const data = event

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

    transporter.verify((err, success) => {
        err
        ? console.log(err)
        : console.log(`=== Server is ready to take messages: ${success} ===`);
    });

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
    //             res.send(error, data)
    //         } else {
    //             console.log(`Success!`);
    //             res.send(response, data)
    //         }
    //         transporter.close();
    // });
    transporter.sendMail(mailOptions)
    .then( results => {

        console.log(`Success - ${results}`);
        
        return {
            statusCode: 200,
            body: JSON.stringify({ "Success": results }, null),
            headers: {
               'Access-Control-Allow-Origin': '*',
           },
        };    
        
    })
    .catch ( error => {
        console.log(`Error - ${error}`);
        
        return {
            statusCode: 500,
            body: JSON.stringify({ "API Error": error }, null),
            headers: {
               'Access-Control-Allow-Origin': '*',
           },
        };    
        
    })
    // });
    // app.use('/api/contact', router);
};


// module.exports = app;
// module.exports.handler = serverless(app)