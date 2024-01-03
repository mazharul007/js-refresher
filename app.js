// 🔍 Scope: Understanding variable visibility in different parts of your code.

language = "Spanish"; // 🌍 Global scope 🌐

function learn(topic) {
  language = topic; // 📚 Function scope 📘
  console.log(`I am learning ${topic}`);
}

learn("Angular"); // 📚 Output: I am learning Angular
console.log(`I am learning ${language}`); // 📚 Output: I am learning Angular

/**
 * let vs var vs const
 * - 'let' is block-scoped, limited to the {} where it's defined, while 'var' has function or global scope.
 * - 'let' cannot be redeclared in the same scope, but it can be reassigned.
 * - 'var' can be both redeclared and reassigned in the same scope.
 * - 'const' cannot be reassigned, but for objects or arrays declared with const, their properties can be mutated.
 */

// ⚙️ Function: Building reusable blocks of code for efficient and modular development.

/**
 * Kinds of functions: regular functions, function expressions, named function expressions, arrow functions, anonymous functions
 * Notes: If a function has no return type, then by default, it returns undefined, and in JS, undefined means something
 */

// Regular functions
function greet() {
  console.log("Morning, Mazhar!");

  // Return undefined by default
}

let greetMsg = greet();
console.log(greetMsg);

// Function expression
const greetExp = function () {
  console.log("Hi, I am a function expression");
};

console.log(greetExp());

// Named function expression
const greetNamedExp = function hello() {
  console.log("Hi, I am a named function expression");
};

console.log(greetNamedExp());

// Arrow function
const greetArrowFunc = () => {
  console.log("Hello, I am an arrow function");
};

console.log(greetArrowFunc());

// Function with parameters using arrow function
const sum = (numOne, numTwo) => console.log(numOne + numTwo);
console.log(sum(90, 110)); // Output: 200

// Anonymous functions
function parentFunc() {
  return function () {
    console.log("Hi, I am anonymous function!");
  };
}

// 🎉 Event Handlers: Reacting to user actions and interactions with your web application.

// select button : Exploring DOM
const button = document.getElementById("btnClick");

// event handler
function hello() {
  console.log("onclick hello triggered");
}

// add listener
button.addEventListener("click", hello);

// 🔄 Primitive Vs Reference: Exploring the nuances of data types in JavaScript.

// 🧰 Array Methods: Unleashing the power of built-in methods for arrays.

// 🚀 Object Tricks: Leveraging advanced techniques for working with JavaScript objects.

// 🌐 Spread & Rest Operator: Simplifying array and object manipulations with these powerful operators.

// ✔️ Truthy & Falsy Values: Understanding the truthiness and falsiness of values in conditional statements.

// ➖ Ternary Operator: Writing concise and expressive conditional statements.

// 🤝 Destructuring: Extracting values from arrays and objects with elegance.

// 🌟 Optional Chaining: Handling nested object properties gracefully.

// 🤔 Nullish Coalescing Operator: Dealing with null or undefined values effectively.

// ⚡ Short Circuit Conditionals: Optimizing conditional logic for efficiency.

// ⏳ Asynchronous JS: Mastering asynchronous programming for responsive web applications.
