const descriptionValidation = (descriptionValue, res, value) => {
  if (!descriptionValue) {
    return res.status(400).json(
      { message: `O campo ${value} é obrigatório` },
    );
  }
};

module.exports = (req, res, next) => {
  const { description } = req.body;
  const { createdAt, rating, difficulty } = description;

  return descriptionValidation(description, res, 'description')
    || descriptionValidation(createdAt, res, 'createdAt')
    || descriptionValidation(rating, res, 'rating')
    || descriptionValidation(difficulty, res, 'difficulty')
    || next();
};

