// A single variable which hold more than one value
let numbers = [2, 4, 6, 7, 10, 11];
// Each value has a number associated to it called - index number
// Index number start from zero

let employees = [
    "Zak",
    "Mark",
    "Christian",
    "Timothy",
    "Abdul"
];

console.log(employees[0]);
console.log(employees);

console.log(employees.length);

// Change value of an item
employees[2] = "Ender";
console.log(employees);

// Add item
employees.push("Christian");
console.log(employees);

// Remove last item
let test = employees.pop();
console.log(employees);

let fruits = [
    "Banana",
    "Apple",
    "Kiwi"
];

// Start at index 1, remove 2 items and then add Orange
fruits.splice(1, 2, "Orange");
console.log(fruits);