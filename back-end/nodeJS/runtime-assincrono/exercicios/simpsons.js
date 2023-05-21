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

const removeCharacterById = async (...ids) => {
  const data = await readAll();

  const filteredData = data.filter(({ id }) => {
    return !ids.includes(Number(id));
  });

  // const filteredData = data.reduce((acc, cur) => {
  //   const idWasFinded = ids.some((id) => Number(cur.id) === id);
  //   console.log(idWasFinded)
  //   if (idWasFinded) {
  //     return acc
  //   }
  //   return [...acc, cur]
  // }, [])

  const filteredDataJson = JSON.stringify(filteredData);
  console.log(filteredDataJson);
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

  removeCharacterById(3, 4, 6, 100);


};

main();
