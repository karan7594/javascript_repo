// Map method
// create a new array with the result of some operations . the value is callback returns are used to form new array

//arr.map(callBack(value,index,array)

// const num = [12, 243, 2, 32];
// let newarr = num.map((val, index) => {
//   console.log(val ** 2);
// });

const arr = [2, 32, 322, 22, 53];
const newarr = arr.map((val) => {
  return val ** 2;
});
console.log(newarr);

