const express = require('express');
const userBookController = require('./controllers/userBook.controller');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

app.get('/userbooks/:id', userBookController.getUsersBooksById);


module.exports = app;
