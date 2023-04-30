require('dotenv').config();
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  const data = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
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

  try {
    const info = await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};