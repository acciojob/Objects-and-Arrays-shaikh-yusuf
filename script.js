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




// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
