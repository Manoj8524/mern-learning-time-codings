// const os = require("os");

// console.log(os.arch(), os.platform());

const { a: name1, b, c } = require("./variables");
const { hi, hello, hey } = require("./functions");

hi(name1);
hey(b);
hello(c);
