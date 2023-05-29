const express = require('express');
const activitiesRouter = require('./routes/activitiesRouter');
const nameValidation = require('./middlewares/nameValidation');
const priceValidation = require('./middlewares/priceValidation');
const descriptionValidation = require('./middlewares/descriptionValidation');
const createdAtValidation = require('./middlewares/createdAtValidation');
const ratingValidation = require('./middlewares/ratingValidation');
const difficultyValidation = require('./middlewares/difficultyValidation');

const app = express();
app.use(express.json());

app.use(nameValidation);
app.use(priceValidation);
app.use(descriptionValidation);
app.use(createdAtValidation);
app.use(ratingValidation);
app.use(difficultyValidation);

app.use('/activities', activitiesRouter);

module.exports = app;