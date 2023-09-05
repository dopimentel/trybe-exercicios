const express = require('express');
const { getAll } = require('./controllers/book.controller');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books', getAll);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));