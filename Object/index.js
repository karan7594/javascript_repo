const factObj = {
  firstName: "karan",
  lastName: "Prajapat",
  branch: "cse",
  age: 21,
  createFunction: function () {
    return "this is a function";
  },
};

console.log(factObj);
console.log(factObj.lastName);

const { firstName, branch } = factObj;
console.log(branch);
console.log(factObj.createFunction());
