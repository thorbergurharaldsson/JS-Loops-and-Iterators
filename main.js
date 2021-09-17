// An array of objects, each object is information about each person
let people = [
  {
    id: 1,
    name: "Zorine Lawleff",
    birthdate: "12/10/1987",
    children: 0,
    country: "China",
    can_program: true,
  },
  {
    id: 2,
    name: "Veriee Peltz",
    birthdate: "5/15/1991",
    children: 0,
    country: "Brazil",
    can_program: true,
  },
  {
    id: 3,
    name: "Helenka Guerrier",
    birthdate: "6/23/1970",
    children: 4,
    country: "Colombia",
    can_program: true,
  },
  {
    id: 4,
    name: "Cora Nesbit",
    birthdate: "8/8/1996",
    children: 1,
    country: "Indonesia",
    can_program: false,
  },
  {
    id: 5,
    name: "Claudine Sunman",
    birthdate: "7/20/1978",
    children: 4,
    country: "Russia",
    can_program: true,
  },
  {
    id: 6,
    name: "Mercedes Cahey",
    birthdate: "12/11/1960",
    children: 5,
    country: "Azerbaijan",
    can_program: true,
  },
  {
    id: 7,
    name: "Madelene Ledeker",
    birthdate: "4/3/1987",
    children: 1,
    country: "Indonesia",
    can_program: false,
  },
  {
    id: 8,
    name: "Rubia Hammill",
    birthdate: "7/30/1966",
    children: 1,
    country: "Indonesia",
    can_program: true,
  },
  {
    id: 9,
    name: "Hastie Limbourne",
    birthdate: "5/19/2004",
    children: 5,
    country: "China",
    can_program: false,
  },
  {
    id: 10,
    name: "Rip Trorey",
    birthdate: "1/16/2000",
    children: 3,
    country: "Nicaragua",
    can_program: false,
  },
];

// Get the current year to be able to calculate users age
const currentYear = new Date().getFullYear();

// declare a variable for total amount of kids
let totalAmount = 0;

// loops through each object the the array people
for (let i = 0; i < people.length; i++) {
  // Getting first persons age by getting the birthyear and subtrackting current year
  // get last 4 letters of people[i].birthday
  let personBirthYear = people[i].birthdate.slice(-4);
  let personAge = currentYear - personBirthYear; // subtracks current year from personBirthYear

  console.log(people[i].name + " has " + people[i].children + " kids"); // logs how many kids people[i] has
  console.log(people[i].name + ": " + personAge + " years old"); // logs how old people[i] is
  totalAmount = totalAmount + people[i].children; // adds people[i].children to totalAmount
  console.log(""); // empty line to make console look cleaner
}

console.log("That's a total of " + totalAmount + " kids"); // logs total amount of kids
console.log(""); // empty line to make console look cleaner

// loops through each object the the array people
for (let i = 0; i < people.length; i++) {
  // checks if people[i] knows how to progarm
  let programing = people[i].can_program ? "Yes" : "No";

  // logs all the details of people[i]
  console.log("Name: " + people[i].name);
  console.log("Birth Date: " + people[i].birthdate);
  console.log("Children: " + people[i].children);
  console.log("Country: " + people[i].country);
  console.log("Can program: " + programing);
  console.log("");
}
