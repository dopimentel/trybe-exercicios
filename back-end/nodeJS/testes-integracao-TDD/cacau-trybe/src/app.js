const express = require('express');
const { 
  getAllChocolates, getChocolateById, getChocolatesByBrand, filterChocolatesByName,
 } = require('./cacauTrybe');

const app = express();
app.use(express.json());

app.listen(3001, () => {
  console.log('App listening on port 3001!');
});

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const chocolates = await filterChocolatesByName(name);
  res.status(!chocolates.length ? 404 : 200).json(chocolates);
});

app.get('/chocolates', async (req, res) => {
  const chocolates = await getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/total', async (req, res) => {
  const chocolates = await getAllChocolates();
  res.status(200).json({ totalChocolates: chocolates.length });
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const chocolate = await getChocolateById(Number(id));
  if (!chocolate) {
    return res.status(404).json({ message: 'Chocolate not found' });
  }
  res.status(200).json(chocolate);
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await getChocolatesByBrand(Number(brandId));
  if (chocolates) res.status(200).json({ chocolates });
});

module.exports = app;