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

  var a= userInput[0].split(" ");
  function summation (){
  var sum = 0;
    
  for (i=0; i<10; i++)
    {
    sum = sum + +a[i];
    if (a<0){
      break;
    }
  }
 
    console.log(sum);
  }
  summation();
  

//end-here
});