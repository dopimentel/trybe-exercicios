const express = require('express');
const { getAll, getById, create, update, exclude } = require('./controllers/book.controller');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books', getAll);
app.get('/books/:id', getById);
app.post('/books', create);
app.put('/books/:id', update);
app.delete('/books/:id', exclude);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  const errorResponse = {
    status: 'error',
    statusCode,
    message: err.message || 'Internal Server Error',
  };
  
  res.status(statusCode).json(errorResponse);
});


app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));