//Syncronous and Asyncronous Function

//readfile
//whitefile
//appendfile
//delete

const fs = require("fs");

// fs.writeFileSync("./contents/demoFile.txt ", "We are learning NodeJS.");

// fs.appendFileSync("./contents/demoFile.txt", "We are learning JS.");

// fs.rename("./contents/demoFile.txt", "./contents/RenamedFile.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Rename Successful!");
//   }
// });

// fs.readFile("./contents/RenamedFile.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// console.log("before");

// fs.readFile("./contents/RenamedFile.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.appendFileSync(
//       "./contents/RenamedFile.txt",
//       "Is this a synchronous Process?"
//     );
//     fs.readFile("./contents/RenamedFile.txt", "utf-8", (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(data);
//       }
//     });
//   }
// });

// console.log("after");

fs.unlink("./contents/RenamedFile.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Deleted Successfully");
  }
});
