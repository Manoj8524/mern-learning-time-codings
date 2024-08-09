const fs = require("fs");

// fs.writeFile("new.txt", "hey are you there?", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("File written");
// });

// fs.writeFile("temp/lekshire.txt", "This is my third file", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("File updated");
// });

// fs.appendFile("new.txt", " and this is a file created with node.js", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("File updated");
// });

// fs.unlink("new.txt", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("File Deleted");
// });

// fs.readFile("new.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// });

// fs.mkdir("temp", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Folder created");
// });

fs.readdir("temp", (err, files) => {
  if (err) {
    console.log(err);
  } else {
    console.log(files);
  }
});
