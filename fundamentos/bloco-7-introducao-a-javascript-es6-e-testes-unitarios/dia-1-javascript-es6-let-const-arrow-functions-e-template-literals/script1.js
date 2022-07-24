const btn = document.getElementById('btn');
let clickCount = 0;

const bodyElement = document.querySelector('body')
const pElement = bodyElement.appendChild(document.createElement('p'));
pElement.innerText =`${clickCount} click`;

btn.addEventListener("click", () => {
  clickCount += 1;
  let clicks = () => (clickCount > 1 ? "clicks" : "click");
  pElement.innerText = `${clickCount} ${clicks()}`;
  return clickCount;
});




// Crie uma página com um contador de cliques
// Sua página deve conter:
// Um botão ao qual será associado um event listener;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.