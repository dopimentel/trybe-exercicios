const Sequelize = require('sequelize');
const { Book } = require('../models');

const getAll = async (author) => {
  const books = await Book.findAll({ order: [['title', 'ASC']], });

  return books;
}

const getById = async (id) => {
  const book = await Book.findByPk(id);

  if (!book) return null;

  return book;
}

const create = async (obj) => {
  const { title, author, pageQuantity, publisher } = obj;

  const book = await Book.create({ title, author, pageQuantity, publisher });

  return book;
}

const update = async (id, obj) => {
  const { title, author, pageQuantity, publisher } = obj;

  const [bookId] = await Book.update(
    { title, author, pageQuantity, publisher },
    { where: { id } },
  );

  return bookId;
}

const exclude = async (id) => {
  const book = await Book.destroy(
    { where: { id } },
  );

  return book;
}

const getByAuthor = async (author) => {
  const book = await Book.findAll(
    { 
      where: {
        author: {
          [Sequelize.Op.like]: `%${author}%`,
        },
      },
      order: [['title', 'ASC']],
    },
  );

  return book;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  exclude,
  getByAuthor,
};
