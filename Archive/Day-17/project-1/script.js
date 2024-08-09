// 1. select a number
// 2. add 2 with that number
// 3. multiply 82 with that number
// 4. subtract 10 with that number
// 5. multiply 50 with that number
// 6. divide 10 with that number

// let a = 12;
// // a = a + 2;
// a += 2;
// a *= 82;
// a -= 10;
// a *= 50;
// a /= 10;

// console.log(a);

// let b = 6;
// // a = a + 2;
// b += 2;
// b *= 82;
// b -= 10;
// b *= 50;
// b /= 10;

// console.log(b);

// let c = 8;
// // a = a + 2;
// c += 2;
// c *= 82;
// c -= 10;
// c *= 50;
// c /= 10;

// console.log(c);

//1. select a number
//2. add 2 with that number
//3. multiply 82 with that number
//4. subtract 10 with that number
//5. multiply 50 with that number
//6. divide 10 with that number

//1. select a number
//3. multiply 20 with that number
//4. subtract 20 with that number
//2. add 20 with that number
//5. multiply 100 with that number
//6. divide 10 with that number

let num1 = 5,
  num2 = 12,
  num3 = 24,
  num4 = 38,
  num5 = 42;

function algo1(num) {
  num += 2;
  num *= 82;
  num -= 10;
  num *= 50;
  num /= 10;

  return num;
}

function algo2(num) {
  num *= 20;
  num -= 20;
  num += 20;
  num *= 100;
  num /= 10;
  return num;
}

function findTotal(num) {
  let num1 = algo1(num);
  let num2 = algo2(num);

  console.log("The result of the number is", num1 + num2);
}

findTotal(num1);
findTotal(num2);
findTotal(num3);
findTotal(num4);
findTotal(num5);
