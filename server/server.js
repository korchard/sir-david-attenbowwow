// REQUIRED
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

// ROUTES
app.use('/api/contact', contactRouter);
app.use('/api/gallery', galleryRouter);
app.use('/api/organizations', organizationsRouter);

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});