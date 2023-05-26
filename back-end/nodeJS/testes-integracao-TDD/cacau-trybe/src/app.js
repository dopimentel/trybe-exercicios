const express = require('express');
const { getAllChocolates } = require('./cacauTrybe');

const app = express();

app.get('/chocolates', async (req, res) => {
  const chocolates = await getAllChocolates();
  res.status(200).json({ chocolates });
});

module.exports = app;