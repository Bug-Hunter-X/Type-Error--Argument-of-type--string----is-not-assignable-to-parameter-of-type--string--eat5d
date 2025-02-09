# TypeScript Type Error Bug

This repository demonstrates a common type error in TypeScript that occurs when passing an array to a function expecting a single string.  The `greeter` function expects a single string argument, but the code attempts to pass an array of strings. This results in a type error.

The solution demonstrates how to correctly handle this situation, either by modifying the function signature to accept an array or by modifying the function call to pass a single string.

## How to reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Compile the code using the TypeScript compiler: `tsc bug.ts`
4. Observe the type error.