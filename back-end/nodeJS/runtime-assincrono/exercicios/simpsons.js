const fs = require('fs').promises;

const readAll = async (path, encoding) => {
  const json = await fs.readFile(path, encoding);
  const data = await JSON.parse(json);
  return data
};

const findCharacterById = async (inputIdInNumberOrString) => {
  const data = await readAll('./simpsons.json', 'utf-8');
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
};

const removeCharacterById = async (...ids) => {
  const data = await readAll('./simpsons.json', 'utf-8');

  const filteredData = data.filter(({ id }) => !ids.includes(Number(id)));

  // const filteredData = data.reduce((acc, cur) => {
  //   const idWasFinded = ids.some((id) => cur.id == id);
    // console.log(idWasFinded)
  //   return idWasFinded ? acc : [...acc, cur]
  // }, [])

  const filteredDataJson = JSON.stringify(filteredData);
  console.log(filteredDataJson);
  await fs.writeFile('./simpsons.json', filteredDataJson);
};

const simpsonFamily = async (...ids) => {
  const data = await readAll('./simpsons.json', 'utf-8');
  const filteredData = data.filter(({ id }) => ids.includes(Number(id)));
  const filteredDataJson = JSON.stringify(filteredData);
  console.log(filteredDataJson)
  await fs.writeFile('./simpsonFamily.json', filteredDataJson);
};


const addFamilyMember = async (name) => {
  const data = await readAll('./simpsonFamily.json', 'utf-8');
  console.log(data)
  const newFamily =  [...data, {
    id: String(data.length + 1),
    name
  }]
  const newFamilyJson = JSON.stringify(newFamily);
  console.log(newFamilyJson);
  await fs.writeFile('./simpsonFamily.json', newFamilyJson);
}

const replaceNelson = async () => {
  const data = await readAll('./simpsonFamily.json', 'utf-8');
  const filteredData = data.filter(({ id }) => id !== '5')
  const newFamily = [ ...filteredData,
    {
    id: '6',
    name: 'Maggie Simpson'
    }
  ];
  console.log(newFamily);
  const newFamilyJson = JSON.stringify(newFamily);
  await fs.writeFile('./simpsonFamily.json', newFamilyJson);
}


const main = async () => {
  const data = await readAll('./simpsons.json', 'utf-8');
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

  // removeCharacterById(10, 6);

  simpsonFamily(1, 2, 3, 4);

  addFamilyMember('Nelson Muntz');

  replaceNelson();

};

main();
