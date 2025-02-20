# Installing Express.js: A Complete Guide

## Introduction
Express.js is a fast, unopinionated, and minimalist web framework for Node.js. It simplifies web application development by providing robust features for handling requests, routing, middleware, and more. This guide will walk you through installing and setting up Express.js on your system.

---

## Prerequisites
Before installing Express.js, ensure you have the following installed:

- **Node.js** (Version 14 or later recommended)
- **npm** (Node Package Manager, included with Node.js)
- A command-line interface (CLI) such as Terminal or Command Prompt

To check if Node.js and npm are installed, run:
```sh
node -v
npm -v
```
If they are not installed, download and install Node.js from the [official website](https://nodejs.org/).

---

## Step 1: Initialize a Node.js Project
Navigate to your project directory and initialize a new Node.js project using:
```sh
mkdir my-express-app
cd my-express-app
npm init -y
```
This creates a `package.json` file, which tracks dependencies and project settings.

---

## Step 2: Install Express.js
To install Express.js, run the following command inside your project directory:
```sh
npm install express --save
```
This adds Express.js as a dependency in your `package.json` file and downloads it into the `node_modules` folder.

---

## Step 3: Create a Simple Express Server
Create a new file named `server.js` in your project directory and add the following code:
```js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```
This sets up a basic Express server that responds with "Hello, Express!" when accessed via the root URL.

---

## Step 4: Run the Server
Start your Express server by running:
```sh
node server.js
```
You should see output like:
```
Server is running on http://localhost:3000
```
Open a web browser and visit `http://localhost:3000/` to see the message.

---

## Step 5: Install Nodemon (Optional)
Nodemon automatically restarts the server when file changes are detected. To install it globally, run:
```sh
npm install -g nodemon
```
Start the server using:
```sh
nodemon server.js
```
Now, your server will restart automatically when you modify the code.

---

## Step 6: Structuring Your Express App (Best Practices)
As your application grows, organize your files as follows:
```
my-express-app/
|-- node_modules/
|-- public/        # Static files (CSS, images, etc.)
|-- routes/        # Route handlers
|   |-- index.js
|-- views/         # Templates (if using a templating engine)
|-- server.js      # Main application file
|-- package.json
```

---

## Step 7: Adding Middleware
Express supports middleware for request processing. Example:
```js
const express = require('express');
const app = express();
const PORT = 3000;

// Built-in middleware to parse JSON requests
app.use(express.json());

// Custom middleware to log requests
app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello, Express with Middleware!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

---

## Step 8: Using Express Router
Instead of defining all routes in `server.js`, you can modularize them using the `routes` directory.

1. Create `routes/index.js` and add:
```js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

module.exports = router;
```

2. Modify `server.js` to use the router:
```js
const express = require('express');
const app = express();
const routes = require('./routes/index');
const PORT = 3000;

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

---

## Conclusion
Congratulations! You have successfully installed and set up Express.js. You learned how to:
- Install Express.js
- Create a simple server
- Use middleware
- Organize your app structure
- Implement routing

From here, you can explore more features like database integration, authentication, and deploying your Express app to production. Happy coding!

