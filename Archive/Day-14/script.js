// var, let, const

// var a = true;
// console.log(a);
// let b = 1;
// console.log(b);
// const c = "Jack";
// console.log(c);

// const a = 5;

// a = 10;

// var - global scoped
// let - block scoped

// let a = 10;

// console.log("before", a);

// if (a == 10) {
//   let a = 20;
//   console.log("inside", a);
//   //   var b = 20;
//   //   console.log("b", b);
// }

// console.log("after", a);

// == , ===

// let a = 10;
// let b = "10";

// console.log(typeof a);
// console.log(typeof b);

// console.log(a == b);

// && , || , !

// let a = 5;
// let b = 10;

// // if (a == 5 || b == 8) {
// //   console.log("OKay");
// // } else {
// //   console.log("Not okay");
// // }

//null || undefined || false || 0
// let x = NaN;

// if (x) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// console.log(typeof NaN);

// let a = null;

// console.log(a);

let a = false;
if (!a) {
  console.log("Printed");
} else {
  console.log("Not Printed");
}
