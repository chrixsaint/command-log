# Test the Express.js server running on port 3000 from my terminal

curl http://localhost:3000/test
#Example
// CREATE
await User.create({ name: 'ChrixSaint', email: 'chrix@example.com' });

// READ
const users = await User.findAll(); // or User.findByPk(1);

// UPDATE
await User.update({ name: 'Christian' }, { where: { id: 1 } });

// DELETE
await User.destroy({ where: { id: 1 } });

# To Generate the Personal Model and Migration

npx sequelize-cli model:generate --name Personal --attributes firstName:string,lastName:string,country:string,userEmail:string,password:string,userUid:UUID,profileStatus:boolean,lastLoginCode:integer,accountType:string

# Now that your model files are correct, run all migrations to create your tables in the database:

npx sequelize-cli db:migrate

# you can use this to Undo all migrations in a Sequelize project.

npx sequelize-cli db:migrate:undo:all

Now, here’s a production-ready verifyEmail.js script tailored to your markup, which:
Reads the 4 digits and combines them as the OTP code

Retrieves the signup info from localStorage (stored by signup.js)

Sends the verification request to your backend /signup-start endpoint

Handles errors and success (redirect or alert)

Includes handy keyboard navigation between OTP inputs

## property and parameter##

refer to two distinct concepts, although they are both related to how data is handled.

### Properties

A **property** is a characteristic or attribute of an object. In JavaScript, almost everything can be an object, and properties are the key-value pairs that make up those objects.

- **Key-Value Pair:** A property consists of a name (a string or a Symbol) and a value, which can be any JavaScript data type (a string, a number, a boolean, an array, a function, or even another object).

- **Object-Oriented Concept:** Properties are fundamental to object-oriented programming in JavaScript. They define the data that an object holds.

- **Access:** You access an object's properties using dot notation (`object.property`) or bracket notation (`object['property']`).

- **Example:**

  ```javascript
  const car = {
    make: "Toyota", // 'make' is a property, "Toyota" is its value
    model: "Camry", // 'model' is a property, "Camry" is its value
    year: 2022, // 'year' is a property, 2022 is its value
    start: function () {
      // 'start' is a method (a property whose value is a function)
      console.log("Engine started");
    },
  };

  console.log(car.make); // Accessing the 'make' property
  car.start(); // Calling the 'start' method
  ```

### Parameters

A **parameter** is a named variable in a function's declaration. It acts as a placeholder for a value that will be passed into the function when it is called.

- **Function Definition:** Parameters are listed within the parentheses when you define a function.

- **Local Scope:** Parameters exist only within the scope of the function. They are local variables for that function's execution.

- **Data Passing:** They are how data is "passed into" a function to be used in its logic. The actual values you provide when calling the function are called **arguments**.

- **Example:**

  ```javascript
  function greet(name, greeting = "Hello") {
    // 'name' and 'greeting' are parameters
    console.log(`${greeting}, ${name}!`);
  }

  greet("Alice"); // "Alice" is the argument for the 'name' parameter
  greet("Bob", "Hi"); // "Bob" and "Hi" are arguments
  ```

Parameters are the placeholders for values a function receives (as arguments) when it is called.

Properties are the named slots that hold values on an object.

## Diference between functions and Methods

**all methods are functions, but not all functions are methods.**

The key difference lies in their relationship to objects.

### Function

A **function** is a standalone, independent block of code that performs a specific task. You can define a function and call it anywhere in your program, as long as it's in a scope where it's accessible. It doesn't need to be attached to an object.

- **Syntax:**

  ```javascript
  function sayHello(name) {
    console.log("Hello, " + name);
  }

  // Called independently
  sayHello("Alice");
  ```

- **Purpose:** To encapsulate a reusable piece of logic.

### Method

A **method** is a function that is a property of an object. It's a function that belongs to an object and is used to describe the object's behavior or to operate on the data (properties) that the object holds.

- **Syntax:**

  ```javascript
  const dog = {
    name: "Fido",
    bark: function () {
      // 'bark' is a method
      console.log("Woof!");
    },
    // Shorthand syntax in ES6:
    // bark() {
    //   console.log("Woof!");
    // }
  };

  // Called using dot notation on the object
  dog.bark();
  ```

## things to know about foreign keys and primary keys

Great question! No, you don’t need to modify the Personal migration in this case.

Here’s why:

Personal is the parent table and already has userUid defined as its primary key (UUID).

The Balance table is the child table and references Personal.userUid as a foreign key.

Foreign keys are always defined on the child table (Balance), not the parent.

✅ Therefore, you only add the foreign key configuration in the Balance migration (which we already updated).


## things to know about input/output using async/await
### Input vs Output (I/O)

- **Input (data coming into your app)**
  - Incoming HTTP request data: `req.body`, `req.params`, `req.query`
  - Reading from DB: `await User.findByPk(id)` (receiving rows)
  - Reading files: `await fs.readFile(path)`
  - Getting external API response: `await fetch(url)` then `await res.json()`

- **Output (data your app sends out)**
  - Sending HTTP response: `res.json()`, `res.send()`, `res.status(...).send()`
  - Writing to DB: `await User.create()`, `await User.update()`, `await Transaction.destroy()`
  - Writing files: `await fs.writeFile(path, data)`
  - Sending external API request: `await fetch(url)` (the request send)

- **Both directions**
  - Most ops are request/response pairs (DB queries, HTTP calls): send (output) then receive (input). Use `async/await` with `try/catch`.
