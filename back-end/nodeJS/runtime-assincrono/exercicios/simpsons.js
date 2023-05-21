const fs = require('fs').promises;

const readAll = async () => {
  const json = await fs.readFile('./simpsons.json', 'utf-8');
  const data = await JSON.parse(json);
  return data
};

const main = async () => {
  const data = await readAll();
  // console.log(data)
  data.map((elem) => {
    const { id, name } = elem
    console.log(`${id} - ${name}`)
  })

};
main();
