// function add(a, b) {
//   return a + b;
// }

// let result = add(4, 5);

// console.log(result);

//waiting
//resolved
//rejected

const users = [
  {
    name: "Anton",
    email: "anton@gmail.com",
  },
  {
    name: "Jenson",
    email: "jenson@gmail.com",
  },
];

let apiUsers = new Promise((resolve, reject) => {
  //   resolve(users);

  setTimeout(() => {
    resolve(users);
  }, 3000); //3s
  //   reject("Sorry your api failed for some unknown reasons");
});

apiUsers
  .then((data) => {
    console.log("resolved", data);
  })
  .catch((err) => {
    console.log("rejected", err);
  });

console.log("run this");
