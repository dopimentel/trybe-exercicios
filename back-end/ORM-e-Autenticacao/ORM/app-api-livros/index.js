const express = require('express');
const { getAll, getById, create } = require('./controllers/book.controller');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books', getAll);
app.get('/books/:id', getById);
app.post('/books', create);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));