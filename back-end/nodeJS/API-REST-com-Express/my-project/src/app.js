const { log } = require('console');
const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const MOVIES_PATH = path.resolve(__dirname,'./movies.json');
const ENCODING = 'utf-8';

app.use(express.json());

const readAll = async (path, encoding) => {
  try {
    const json = await fs.readFile(path, encoding);
    const data = await JSON.parse(json);
    console.log(data)
    return data;
  } catch (error) {
    console.error(`Arquivo não pôde ser lido: ${error}`);
  }
};

const updateMovies = async (path, data) => {
  try {
    await fs.writeFile(path, JSON.stringify(data));

  } catch (error) {
    console.error(`Arquivo não pôde ser atualizado: ${error}`);

  }
};

// async function main() {
//   await readAll(MOVIES_PATH, ENCODING);
// }
// main();

app.get('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readAll(MOVIES_PATH, ENCODING);
    const movie = movies.find(({ id: movieId }) => movieId === Number(id));
    return movie
      ? res.status(200).json(movie)
      : res.status(404).json({ message: 'filme não encontrado' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get('/movies/', async (req, res) => {
  try {
    const movies = await readAll(MOVIES_PATH, ENCODING);
    return res.status(200).json(movies);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post('/movies/', async (req, res) => {
  try {
    const { movie, price } = req.body;
    const movies = await readAll(MOVIES_PATH, ENCODING);
    const newIndex = movies.length + 1;
    const newMovie = {
      id: newIndex,
      movie,
      price
    };
    movies.push(newMovie);
    await updateMovies(MOVIES_PATH, movies);
    return res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = app;