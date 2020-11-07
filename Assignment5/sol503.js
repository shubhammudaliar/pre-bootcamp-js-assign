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


// Create a class with name guvi_student

class guvi_student {

// To initialize mark1 and mark2

constructor(mark1, mark2) {

this.mark1 = mark1;

this.mark2 = mark2;

}

// Print Marks

print_marks() {

return "Mark 1 = " + this.mark1 + " Mark 2 = " + this.mark2;

}

}

// student1 and student2 object

student1 = new guvi_student(80, 85);

student2 = new guvi_student(86, 82);

student1.print_marks();

student2.print_marks();
console.log(student1.print_marks());
//end-here
});