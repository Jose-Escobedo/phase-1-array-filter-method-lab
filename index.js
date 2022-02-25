// Code your solution here
function findMatching(arrDrivers, string) {
  return arrDrivers.filter(function (e) {
    return e.toUpperCase() == string.toUpperCase();
  });
}

function fuzzyMatch(arrDrivers, string) {
  return arrDrivers.filter(function (e) {
    return e.startsWith("Sa");
  });
}

const drivers = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

function matchName(arrDrivers, string) {
  return arrDrivers.filter(function (element) {
    // console.log(element.name);
    return element.name === string;
  });
}
// console.log(matchName(drivers, "Bobby"));
console.log(matchName(drivers, "Bobby"));
