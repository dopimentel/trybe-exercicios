const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const MOVIES_PATH = path.resolve(__dirname, './movies.json');
const ENCODING = 'utf-8';
app.use(express.json());

const readAll = async (filePath, encoding) => {
  try {
    const json = await fs.readFile(filePath, encoding);
    const data = await JSON.parse(json);
    return data;
  } catch (error) {
    console.error(`Arquivo não pôde ser lido: ${error}`);
  }
};

const updateMovies = async (filePath, data) => {
  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(`Arquivo não pôde ser atualizado: ${error}`);
  }
};

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
      price,
    };
    movies.push(newMovie);
    await updateMovies(MOVIES_PATH, movies);
    return res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { movie, price } = req.body;
    const movies = await readAll(MOVIES_PATH, ENCODING);
    const movieToUpdate = movies.find(({ id: movieId }) => movieId === Number(id));
    if (movieToUpdate) {
      movieToUpdate.movie = movie || movieToUpdate.movie;
      movieToUpdate.price = price || movieToUpdate.price;
      await updateMovies(MOVIES_PATH, movies);
      return res.status(200).json(movieToUpdate);
    }
    return res.status(404).json({ message: 'filme não encontrado' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readAll(MOVIES_PATH, ENCODING);
    const index = movies.findIndex(({ id: idElem }) => idElem === Number(id));
    if (index === -1) {
      return res.status(404).json({ message: 'filme não encontrado' });
    }
    movies.splice(index, 1);
    await updateMovies(MOVIES_PATH, movies);
    return res.status(204).end();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = app;