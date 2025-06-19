// forEach loop in array
// array.forEach(callBackFunction)

// let arr = [1, 6, 2, 45, 435];
// arr.forEach((val) => {
//   console.log(val * val);
// });
// or

// let arrval = [3, 4, 5, 23, 325, 2];
// let square = arrval.forEach((val) => {
//   console.log(val ** 2);
// });

// or

// let arrvalue = [1, 23, 24, 2, 42, 23, 2, 7];
// let squarevalue = (val) => {
//   console.log(val ** 2);
// };
// arrvalue.forEach(squarevalue);

// [1, 2, 432, 235, 32].forEach(function (value) {
//   console.log(value);       //normal function
// });

[1, 2, 432, 235, 32].forEach((value) => {
  console.log(value);
}); //with arrow function

const arr = [12, 24, 24, 2, 42, 22].map((value) => {
  return value;
});
console.log(arr);
