const activitiesRouter = require('express').Router();

activitiesRouter.post('/', (req, res) => {
  const { name, price, description: { rating, difficulty, createdAt} } = req.body;
  const newActivity = { name, price, description: { rating, difficulty, createdAt} };
  res.status(201).json({ message: "Atividade cadastrada com sucesso!" });
});

module.exports = activitiesRouter;