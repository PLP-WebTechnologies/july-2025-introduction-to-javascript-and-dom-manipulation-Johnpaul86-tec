// Part 1: Variable declarations and conditionals
let isLoggedIn = false;
let userRole = "guest";

function checkStatus() {
  const statusElement = document.getElementById("status");
  if (isLoggedIn && userRole === "admin") {
    statusElement.textContent = "Welcome back, Admin!";
  } else if (isLoggedIn) {
    statusElement.textContent = "Welcome back, User!";
  } else {
    statusElement.textContent = "Please log in to continue.";
  }
}

// Part 2: Custom functions
function greetUser() {
  const name = document.getElementById("nameInput").value;
  alert(`Hello, ${name}!`);
}

function calculateSum(a, b) {
  return a + b;
}

// Part 3: Loop examples
const loopOutput = document.getElementById("loop-output");

// For loop
for (let i = 1; i <= 5; i++) {
  loopOutput.innerHTML += `For loop count: ${i}<br>`;
}

// While loop
let count = 1;
while (count <= 3) {
  loopOutput.innerHTML += `While loop count: ${count}<br>`;
  count++;
}

// Part 4: DOM interactions
document.getElementById("main-title").style.color = "#e74c3c"; // Change title color
document.getElementById("nameInput").style.border = "2px solid #3498db"; // Style input
document.body.style.backgroundColor = "#ffffff"; // Change background
