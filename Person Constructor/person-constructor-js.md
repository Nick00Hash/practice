## Introduction

Use your JavaScript OOP knowledge to create a `Person` class with a constructor.

## Getting Started

```no-highlight
et get person-constructor-js
cd person-constructor-js
code .
```

## Instructions

Create a file for your Person class called `Person.js`. Your Person class should include the following properties:

* firstName
* lastName
* hometown
* occupation
* catchPhrase

After the class is created, make some Person objects in `main.js`. Check that the objects are structured correctly by printing them to the console with `console.log()` statements, then execute the code using `node`.

```no-highlight
node main.js
```

Remember that if you want to hit a debugger, you can run this script with the `--inspect-break` flag:

```no-highlight
node --inspect-brk main.js
```

Once you have that working, add a `name` method that combines the object's `firstName` and `lastName` properties with a space in between. Using a `console.log()` statement, verify that it prints to the console correctly.