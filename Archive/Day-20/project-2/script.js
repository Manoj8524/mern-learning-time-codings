// class Student {
//   constructor(name, age) {
//     this.stdName = name;
//     this.stdAge = age;
//   }

//   print() {
//     console.log(this.stdName + " is of age " + this.stdAge);
//   }
// }

// class School extends Student {
//   constructor(name, age, school) {
//     super(name, age);
//     this.school = school;
//   }
// }

// class Society extends School {
//   constructor(name, age, school, sname) {
//     super(name, age, school);
//     this.society = sname;
//   }
// }

// const std = new Society("James", 20, "St.Patrics Hr.Sec.School", "XYZ");
// console.log(std);
// std.print();

const Student = {
  name: "James",
  age: 15,
  print() {
    console.log(this.name + " is of age " + this.age);
  },
};

const School = {
  school: "St.Patrics Hr.Sec.School",
  //   __proto__: Student,
  ...Student,
};

console.log(School.age);

School.print();
