const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('./arquivo.txt', 'Hello, World!');
    console.log('file written successfully');
  } catch (err) {
    console.error(`Error writing file: ${err.message}`);
  }
}

main();
