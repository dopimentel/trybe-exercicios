const handleErrors = ({ status, message }, _req, res, _next) => {
  res.status(status || 500).json({ message: `Error: ${message}` || 'Server error' });
};

module.exports = handleErrors;
