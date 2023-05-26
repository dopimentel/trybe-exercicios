const fs = require('fs').promises;
const { join } = require('path');

const readCacauTrybeFile = async () => {
  const path = '/files/cacauTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .find((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const filterChocolatesByName = async (query) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.filter((chocolate) => chocolate.name.toLowerCase()
    .includes(query.toLowerCase()));
};

const updateCacauTrybeFile = async (id, newChocolate) => {
  const cacauTrybe = await readCacauTrybeFile();
  const index = cacauTrybe.chocolates.findIndex((chocolate) => chocolate.id === id);
  if (index === -1) return false;
  cacauTrybe.chocolates[index] = newChocolate;
  await fs.writeFile(join(__dirname, '/files/cacauTrybeFile.json'), JSON
    .stringify(cacauTrybe, null, 2));
  return true;
};

module.exports = {
    getAllChocolates,
    getChocolateById,
    getChocolatesByBrand,
    filterChocolatesByName,
    updateCacauTrybeFile,
};