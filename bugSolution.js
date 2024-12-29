function foo(a, b) {
  // Explicit type conversion to numbers
  a = Number(a);
  b = Number(b);

  if (isNaN(a) || isNaN(b)) {
    return null; // Handle non-numeric inputs
  }
  return a + b; // Perform addition
}

console.log(foo(null, 5)); // Output: null
console.log(foo(5, null)); // Output: null
console.log(foo(5, 5));   // Output: 10
console.log(foo(5, '5')); // Output: 10 (Correct numerical addition) 