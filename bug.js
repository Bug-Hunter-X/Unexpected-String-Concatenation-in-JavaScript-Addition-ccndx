function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null inputs
  }
  return a + b; // Perform addition
}

console.log(foo(null, 5)); // Output: null
console.log(foo(5, null)); // Output: null
console.log(foo(5, 5));   // Output: 10

// Unexpected behavior:
console.log(foo(5, '5')); // Output: 55 (string concatenation instead of addition)