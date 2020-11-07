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

  var a= userInput;
  function factorial (){
     var fact = 1;
    for (i=0; i<a; i++)
    {
     fact = (a-i)* fact;
    }
 
    console.log(fact);
  }
  factorial();
  

//end-here
});