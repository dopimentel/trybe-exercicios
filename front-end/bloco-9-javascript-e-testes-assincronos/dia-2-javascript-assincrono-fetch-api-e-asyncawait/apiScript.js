// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  const paragraph = document.getElementById("jokeContainer");
  const joke = fetch(API_URL, myObject)
    .then((response) => response
    .json())
    .then((data) => {
      paragraph.innerText = data.joke;
    })
    .catch((e) => {
      paragraph.innerText = `${e.message}. No more jokes for today`;
    });
};

window.onload = () => fetchJoke();