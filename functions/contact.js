require('dotenv').config();
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
const nodemailer = require('nodemailer');

// NODEMAILER && POST ROUTE to receive an email 
router.post('/', (req, res) => {
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

    transporter.sendMail(mailOptions,
        (error, response) => {
            if (error) {
                console.log(`Error - ${err}`);
                res.send(error)
            } else {
                console.log(`Success!`);
                res.send(response)
            }
            transporter.close();
    });
});

app.use('/api/contact', router);

module.exports.handler = serverless(app)