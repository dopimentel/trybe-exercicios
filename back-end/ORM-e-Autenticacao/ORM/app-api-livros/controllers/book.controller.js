const BookService = require('../services/book.service');

const getAll = async (req, res, next) => {
  const { author } = req.query;
  if (author) {
    try {
      const books = await BookService.getByAuthor(author);

      return res.status(200).json(books);
    }
    catch (error) {
      next(error);
    }
  }
  try {
    const books = await BookService.getAll();

    return res.status(200).json(books);
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

const create = async (req, res, next) => {
  try {
    const { title, author, pageQuantity, publisher } = req.body;
    
    if (!title || !author || !pageQuantity || !publisher) {
      return res.status(400).json({ message: 'Invalid data' });
    }

    const book = await BookService.create({ title, author, pageQuantity, publisher });

    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { title, author, pageQuantity, publisher } = req.body;
    const { id } = req.params;

    if (!title || !author || !pageQuantity || !publisher) {
      return res.status(400).json({ message: 'Invalid data' });
    }

    await BookService.update(id, { title, author, pageQuantity, publisher });

    res.status(200).json({message: 'book updated successfully'});
  } catch (error) {
    next(error);
  }
};

const exclude = async (req, res, next) => {
  try {
    const { id } = req.params;

    const book = await BookService.exclude(id);

    res.status(200).json({message: 'book deleted successfully'});
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  exclude,
};