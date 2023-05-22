const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const MOVIES_PATH = path.resolve(__dirname,'./movies.json');
const ENCODING = 'utf-8';

const readAll = async (path, encoding) => {
  try {
    const json = await fs.readFile(path, encoding);
    const data = await JSON.parse(json);
    console.log(data);
    return data;
  } catch (error) {
    console.error(`Arquivo não pôde ser lido: ${error}`);
  }

};

async function main() {
  await readAll(MOVIES_PATH, ENCODING);
}

main();

const app = express();

module.exports = app;