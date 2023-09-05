const express = require('express');
const { getAll, getById } = require('./controllers/book.controller');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books', getAll);
app.get('/books/:id', getById);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));