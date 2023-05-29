const priceValidation = (req, res, next) => {
  const { price } = req.body;
  if (price === undefined) {
    return res.status(400).json({ message: 'O campo "price" é obrigatório' });
  }
  if (isNaN(Number(price)) || price < 0) {
    return res.status(400).json({ message: 'O "price" deve ser um número maior ou igual a zero' });
  }
  next();
}
module.exports = priceValidation;