const express = require('express');
const activitiesRouter = require('./routes/activitiesRouter');
const nameValidation = require('./middlewares/nameValidation');
const priceValidation = require('./middlewares/priceValidation');
const descriptionValidation = require('./middlewares/descriptionValidation');
const createdAtValidation = require('./middlewares/createdAtValidation');
const ratingValidation = require('./middlewares/ratingValidation');
const difficultyValidation = require('./middlewares/difficultyValidation');
const signupRouter = require('./routes/signupRouter');
const auth = require('./middlewares/auth');

const app = express();
app.use(express.json());
app.use('/signup', signupRouter);

app.use(nameValidation);
app.use(priceValidation);
app.use(descriptionValidation);
app.use(createdAtValidation);
app.use(ratingValidation);
app.use(difficultyValidation);
app.use(auth);
app.use('/activities', activitiesRouter);
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

module.exports = app;
