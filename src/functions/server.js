// REQUIRED
import awsServerlessExpressMiddleware from 'aws-serverless-express/middleware'
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const contactRouter = require('./routes/contact.router');
const galleryRouter = require('./routes/gallery.router');
const organizationsRouter = require('./routes/organizations.router');

// MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));
router.use(awsServerlessExpressMiddleware.eventContext())

// BASE PATH
const functionName = 'standalone-aws-serverless-express-example'
const basePath = `/.netlify/functions/${functionName}/`

// ROUTES
app.use(`${basePath}/api/contact`, contactRouter);
app.use(`${basePath}/api/gallery`, galleryRouter);
app.use(`${basePath}/api/organizations`, organizationsRouter);

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

// INITIALIZE AWS SERVERLESS EXPRESS
const server = awsServerlessExpress.createServer(app, null, binaryMimeTypes)

// LAMBDA HANDLER
exports.handler = (event, context) => {
  return awsServerlessExpress.proxy(server, event, context)
}