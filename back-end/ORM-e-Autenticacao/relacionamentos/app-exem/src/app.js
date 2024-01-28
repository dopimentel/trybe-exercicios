const express = require('express');
const employee = require('./controllers/employee.controller');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.json());

app.get('/employees', employee.getAll);
app.get('/employees/:id', employee.getById);
app.post('/employees', employee.insert);


module.exports = app;