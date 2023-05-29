const ratingValidation = (req, res, next) => {
  const { description } = req.body;
  const { rating } = description;
  if (rating < 1 || rating > 5 || !Number.isInteger(rating)) {
    return res.status(400).json({ message: 'O campo "rating" deve ser um inteiro de 1 à 5' });
  }
  next();
}

module.exports = ratingValidation;