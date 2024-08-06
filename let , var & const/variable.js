// Rule choosing variable => latter ,digit , underscore and $ sign allowed.

// variable


// var is the globally scope while let & const are block scope.
// var is update and redeclared with in its scope.
// let can be update but cannot be redeclar.
// const cannot ben redeclar and update.

// var a = 6;
// console.log(a);
// var a = 9;
// console.log(a);

var a = 9;
let b = 897;
const c = 4;
// {
//   let b = 8;
//   console.log(b);
// }
// console.log(b);

// {
//   var a = 8;
//   console.log(a);
// }

// console.log(a);

{
  const c = 89;
  console.log(c);
}

console.log(c);
