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

// 🎉 Event Handlers: Reacting to user actions and interactions with your web application.

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
