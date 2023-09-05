const BookService = require('../services/book.service');

const getAll = async (req, res, next) => {
  try {
    const books = await BookService.getAll();

    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAll,
};