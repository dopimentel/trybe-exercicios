const express = require('express');
const activitiesRouter = require('./routes/activitiesRouter');
const nameValidation = require('./middlewares/nameValidation');
const priceValidation = require('./middlewares/priceValidation');

const app = express();
app.use(express.json());

app.use(nameValidation);
app.use(priceValidation);
app.use('/activities', activitiesRouter);

module.exports = app;