# Bolter

Bolter is a tool for making functions with optional arguments (I mean, it can be in the middle of the function argument list, not in the end). It will fill missing args with `undefined`, so you don't need to make a lot of conditions.

# Installation

```sh
npm i bolter
```

# Usage

```javascript
const bolter = require("bolter");

// these examples will help you to understand how all it works
const getArgs = bolter(function() { // Function it self
    return [].slice.call(arguments);
}, [String, Number, Function]); // The list of possible arguments

getArgs("test"); // => ["test", undefined, undefined]
getArgs(1, function() {}); // => [undefined, 1, [Function]]
getArgs("test", function() {}); // => ["test", undefined, [Function]]
getArgs("test", 1, function() {}); // => ["test", undefined, [Function]]
getArgs({}); // => [undefined, undefined, undefined]

// example with static args
bolter((a, b) => [a, b], [1, Number])(228); // => [1, 228]
```