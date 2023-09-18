const players = ["John", "Bob", "Alice", "Poppy"];
const person = {
  name: "John Doe",
  age: 80,
};

// Create a reference to the array players
const team = players;

// Create a copy of the array players using the spread operator
const team1 = [...players];

// Create a copy of the object person using the spread operator
const cap1 = { ...person };

// Example: Modifying a property in the original players array
players.push("Sarah");

// Example: Modifying a property in the original person object
person.name = "Jane Smith";

console.log("team:", team);   // This will show the updated players array (including Sarah)
console.log("team1:", team1); // This will show the original players array
console.log("cap1:", cap1);   // This will show the original person object


// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
