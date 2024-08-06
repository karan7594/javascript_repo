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

let arrvalue = [1, 23, 24, 2, 42, 23, 2, 7];
let squarevalue = (val) => {
  console.log(val ** 2);
};
arrvalue.forEach(squarevalue);
