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

// async function main() {
//   await readAll(MOVIES_PATH, ENCODING);
// }
// main();

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await readAll(MOVIES_PATH, ENCODING);
  const movie = movies.find(({ id: movieId }) => movieId === Number(id));
  return res.status(200).json(movie);
});

module.exports = app;