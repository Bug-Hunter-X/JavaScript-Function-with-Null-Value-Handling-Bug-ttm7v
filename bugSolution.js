function foo(a, b) {
  // Use typeof to check if values are numbers before adding them
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0; //Or throw an error: throw new Error('Inputs must be numbers');
  }
  return a + b;
}

console.log(foo(null, 1)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(1, 2)); // Output: 3
console.log(foo(undefined, 2)); // Output: 0
console.log(foo(1, '2')); // Output: 0