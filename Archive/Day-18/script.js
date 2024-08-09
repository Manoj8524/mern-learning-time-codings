// document.querySelector("h1").innerText = "Hi from Javascript";

// document.querySelector("#title").innerText = "Hi from Javascript";
// document.getElementById("title").innerText = "Hi from Javascript";

// document
//   .querySelector("img")
//   .setAttribute(
//     "src",
//     "https://images.hdqwalls.com/download/baby-groot-2018-4k-z2-1680x1050.jpg"
//   );

// console.log(document.querySelectorAll("h1"));

// const fruits = ["apple", "mango", "orange", "grapes"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// fruits.forEach((fruit) => {
//   console.log(fruit);
// });

// odd places h1 color red
// even places h1 color blue

document.querySelectorAll("h1").forEach((elem, index) => {
  if ((index + 1) % 2 == 0) {
    elem.style.color = "blue";
  } else {
    elem.style.color = "red";
    console.log("odd");
  }
  elem.innerText = "Entri Bootcamp";
});
