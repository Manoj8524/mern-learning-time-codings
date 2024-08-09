const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

function getJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      response.json().then((data) => {
        jokeEl.innerHTML = data.joke;
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

getJoke();

jokeBtn.addEventListener("click", getJoke);
