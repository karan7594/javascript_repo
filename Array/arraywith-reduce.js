// Largest number find. by the reduce method
const arr = [1, 2, 3, 546, 57, 437, 3, 754, 836374, 6, 34];
const largestnumber = arr.reduce((val, nextvalue) => {
  return val > nextvalue ? val : nextvalue;
});

console.log(largestnumber);

