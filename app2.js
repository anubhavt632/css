function yob() {
  const birthyear = parseInt(prompt("Enter your year of birth: "));
  const currentyear = new Date().getFullYear();
  alert("You are " + (currentyear - birthyear) + " years old!");
}
// Array
let fruits = ["apple", "orange", "pineapple", "kiwi", "banana"];

// objects

let student = {
  name: "Anubhav",
  age: 23,
  class: "Microprocessor",
  hasLibraryAccess: true,
};
