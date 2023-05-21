const fs = require('fs').promises;

const main = async () => {
  const json = await fs.readFile('./simpsons.json', 'utf-8');
  const data = await JSON.parse(json);
  // console.log(data)
  data.map((elem) => {
    const { id, name } = elem
    console.log(`${id} - ${name}`)
  })

};
main();
