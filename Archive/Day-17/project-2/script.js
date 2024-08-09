// let user = {
//   name: "Anton",
//   age: 25,
//   contact: 9823492303,
// };

// let random = "age";

// console.log(user.age);
// console.log(user[random]);

let user = {
  name: {
    firstName: "Anton",
    middleName: "Francis",
    lastName: "Jeejo",
  },
  age: 25,
  contact: 9823492303,
  sports: ["Football", "Basketball"],
  school: {
    name: "XYZ School",
    info: {
      category: "CBSE",
      contact: {
        address: "XYZ address",
        phone: {
          office: "0422-2352343",
          mobile: "9823423439",
        },
      },
    },
  },
};

console.log(user.school.info.contact.phone.mobile);
