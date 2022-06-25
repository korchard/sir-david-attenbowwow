// REQUIRED
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const contactRouter = require('./routes/contact.router');
const portfolioRouter = require('./routes/portfolio.router');

// MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

// ROUTES
app.use('/api/contact', contactRouter);
app.use('/api/portfolio', portfolioRouter);

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});