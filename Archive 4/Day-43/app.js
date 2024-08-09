// let a = false;

// if (!a) {
//   console.log("done");
// }

db.users.find({ age: { $not: { $gt: 18 } } });
