const express = require('express');
const activitiesRouter = require('./routes/activitiesRouter');
const nameValidation = require('./middlewares/nameValidation');

const app = express();
app.use(express.json());

app.use(nameValidation);
app.use('/activities', activitiesRouter);

module.exports = app;