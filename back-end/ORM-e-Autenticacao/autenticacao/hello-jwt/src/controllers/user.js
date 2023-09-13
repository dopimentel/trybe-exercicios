const user = (req, res) => {
  const { username, admin } = req.user;
  return res.status(200).json({ username, admin });
};

module.exports = user;