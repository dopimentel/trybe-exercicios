const fs = require('fs').promises;

const readAll = async () => {
  const json = await fs.readFile('./simpsons.json', 'utf-8');
  const data = await JSON.parse(json);
  return data
};

const findCharacterById = async (inputIdInNumberOrString) => {
  const data = await readAll();
  const promise = new Promise((resolve, reject) => {
    const idWasFinded = data.find(({ id }) => id == inputIdInNumberOrString);
    if (idWasFinded) {
      const { name: character } = idWasFinded;
      resolve(character)
    } else {
      reject(new Error("id não encontrado"));
    }
  });
  return promise;
}

const main = async () => {
  const data = await readAll();
  // console.log(data)
  data.map((elem) => {
    const { id, name } = elem
    console.log(`${id} - ${name}`)
  });

  try {
    const character = await findCharacterById(100);
    console.log(character);

  } catch (error) {
    console.error(error.message);
  };

};

main();
