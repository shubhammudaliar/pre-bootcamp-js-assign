const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here

  var m1 = 10;
  var m2 = 20;
  console.log(m1 == m2);
  

//end-here
});