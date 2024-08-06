// Function defination
// 👇
// function myFunction(){

// }

//Function call
// 👇
// myFunction();

// function myFunction() {
//   console.log("hellow world!!");
// }
// myFunction();   // after call then print the function.

// function sum(a, c) {
//     // local variable => block scope
//   sum = a + c;
//   return sum;
//   //return is the last statement of the function
// }
// let val = sum(65, 45);
// console.log(val);

function countVowels(str) {
  count = 0;
  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}

countVowels("akjash seids lauo ");
