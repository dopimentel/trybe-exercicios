const difficultyValidation = (req, res, next) => {
  const { description } = req.body;
  const { difficulty } = description;
  difficulties = ["Fácil", "Médio", "Difícil"];
  if (!difficulties.includes(difficulty)) {
    return res.status(400).json({ message: 'O campo "difficulty" deve ser um desses: "Fácil", "Médio", "Difícil"' });
  }
  next();
};

module.exports = difficultyValidation;
