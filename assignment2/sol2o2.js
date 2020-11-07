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
function check(){
  var a = 1;
  var b = 2;
  console.log(a && b);
  

};
  check();
  

//end-here
});
