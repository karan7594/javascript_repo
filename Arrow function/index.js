function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  if (age > 0) return age;
  else return "somthing is wrong"; //basic function in js
}

const age1 = calcFactAge(2015);
console.log(age1); //output = 5
console.log(calcFactAge(2019)); //outout = 9
console.log(calcFactAge(2921));   // output = something is worong .

const calcFactAge2 = (
  year // Arrow function in js
) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year //conditions are use in calcFactAge2.
    : `Imposibal year. Year needs to be less or equal ${new Date().getFullYear()}`;

console.log(calcFactAge2(2019));      // output = 5
console.log(calcFactAge2(3421));       //output = Imposibal year. Year......
