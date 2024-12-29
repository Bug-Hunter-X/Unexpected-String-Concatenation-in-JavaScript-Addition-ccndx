# Unexpected String Concatenation in JavaScript Addition

This example demonstrates a common, yet subtle, error in JavaScript related to type coercion and the plus (+) operator.  When adding numbers, you might encounter unexpected string concatenation if one of the operands is a string.

## The Bug
The `foo` function attempts to add two numbers. However, if either input is a string, JavaScript will perform string concatenation instead of numerical addition.

## The Solution
The solution is to explicitly convert both inputs to numbers before performing the addition using the `Number()` function or the unary plus operator (+). This ensures that numerical addition is always used, preventing unexpected concatenation.