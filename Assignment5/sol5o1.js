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

let a = userInput[0].split(" ");
let b = ['a','e','i','o','u'];  
  count= 0;
  
    function countvowel(){
    for(i=0; i< a.length; i++)
    {
     for (j=0; j< b.length; j++)
     {
      if (a[i]==b[j])
        count =count + 1;
       
     }
    }
   console.log(count);
  }
   countvowel();
//end-here
});
