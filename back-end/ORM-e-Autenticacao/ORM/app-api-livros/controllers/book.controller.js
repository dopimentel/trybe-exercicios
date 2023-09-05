const BookService = require('../services/book.service');

const getAll = async (req, res, next) => {
  try {
    const books = await BookService.getAll();

    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
}

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const book = await BookService.getById(id);

    if (!book) return res.status(404).json({ message: 'Not found' });

    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
};