const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();

  return books;
}

const getById = async (id) => {
  const book = await Book.findByPk(id);

  if (!book) return null;

  return book;
}

const create = async (obj) => {
  const { title, author, pageQuantity } = obj;

  const book = await Book.create({ title, author, pageQuantity });

  return book;
}

module.exports = {
  getAll,
  getById,
  create,
};
