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
var arth = userInput[0].split(" ");
function calculator(){
  var a = arth[0];
  var b = arth[1];
  console.log(+a + +b);
  console.log(+a - +b);
  console.log(+a * +b);
  console.log(+a / +b);
};
  calculator();
  

//end-here
});