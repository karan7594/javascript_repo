let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

console.log(`today is ${day}`);

// let day = new Date().getDay();
// switch (day) {
//   case "monday":
//     console.log("happy");
//     break;
//   case "tuesday":
//     console.log("sad");
//     break;
//   case "Friday":
//     console.log(":smaie");
// }
// console.log(day);
