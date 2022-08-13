// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const joke = fetch(API_URL, myObject)
    .then((response) => response
    .json())
    .then((data) => {
      const paragraph = document.getElementById("jokeContainer");
      paragraph.innerText = data.joke;
    })
    .catch((e) => {
      const paragraph = document.getElementById("jokeContainer");
      paragraph.innerText = `${e.message}. No more jokes for today`;
    });
};

window.onload = () => fetchJoke();