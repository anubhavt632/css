function sayHello() {
  alert("hello!");
}

let totalAmount = 1500;
let discount = 5.0;

if (totalAmount > 4000.0) {
  discount = 10.0;
} else if (totalAmount > 2000.0) {
  discount = 7.0;
} else {
  discount = 5.0;
}

console.log("your discount is : " + discount + " %");

let username = "anubhavt632";
let password = "anubhavt7071";

if (username === "anubhavt632" && password === "anubhavt7071") {
  console.log(
    "welcome " + username + " you are now redirected to the dashboard!"
  );
} else {
  console.log("sorry the credentials are not matched!");
}

// Global scope
var globalVariable = "I am global";

function foo() {
  console.log(globalVariable); // Accessible
}

console.log(globalVariable); // Accessible

// Local scope
function foo() {
  var localVariable = "I am local";
  console.log(localVariable); // Accessible
}

foo();
console.log(localVariable); // Not accessible

// Block scope
if (true) {
  let blockVariable = "I am block scoped";
  console.log(blockVariable); // Accessible
}

console.log(blockVariable); // Not accessible

// Function scope (ES5 and below)
function foo() {
  if (true) {
    var functionScopedVariable = "I am function scoped";
    console.log(functionScopedVariable); // Accessible
  }
  console.log(functionScopedVariable); // Accessible
}

console.log(functionScopedVariable); // Not accessible
