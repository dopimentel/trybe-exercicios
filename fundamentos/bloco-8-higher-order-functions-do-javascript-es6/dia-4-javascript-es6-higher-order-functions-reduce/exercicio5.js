// 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

const containsA = (names) =>
  names.reduce(
    (acc, name) =>
      (acc += name
        .split("")
        .reduce(
          (acc, curr) => (curr === "A" || curr === "a" ? (acc += 1) : acc),
          0
        )),
    0
  );

console.log(containsA(names))