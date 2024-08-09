// const person = {
//   name: "Jack",
//   age: 23,
//   contact: 982342342,
// };

// function Person(firstName, lastName, age, contact) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.contact = contact;
// }

// Person.prototype.printName = function () {
//   return this.firstName + " " + this.lastName;
// };

// const person1 = new Person("Jack", "Daniels", 23, 9823423420);
// const person2 = new Person("Julie", "Kinder", 25, 8521479630);

// console.log(person1);
// console.log(person2);

// console.log(person1.printName());
// console.log(person2.printName());

function Person(firstName, lastName, age, contact) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.contact = contact;
}

Person.prototype.get = function () {
  return this.firstName;
};

Person.prototype.set = function (value) {
  this.firstName = value;
};

const person1 = new Person("Jack", "Daniels", 23, 9823423420);

console.log(person1);

// person1.firstName = "Kevin";
// person1.lastName = "Dallson";
// person1.age = 35;
// person1.contact = 965774520;

console.log(person1.get());
person1.set("Penny");

console.log(person1);
