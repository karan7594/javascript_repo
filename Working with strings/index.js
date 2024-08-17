let votesInteresting = 20;
let votesMindlowing = 0;
let votesFalse = 33;
const totalUpvotes = votesInteresting + votesMindlowing;

function calcFactAge1(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  if (age > 0) return age;
  else return "somthing is wrong";
}

const text = "Lisbon is the capital of Portugal";

const str = `the current fact is "${text}". It is ${calcFactAge1(
  2018
)} year old. It is probably ${
  totalUpvotes > votesFalse ? "correct" : "not true"
}.`;
console.log(str);
