# Bicycle Shop

## Overview:

Get your bicycle shop up and running quickly with this customizable Node.js-based solution which allows users to browse through a catalog of bicycles with product descriptions, prices, and star ratings.

![Project Overview](/bicycle-shop-express.gif)

<br>

## URls:

- Bicycle catalog: http://localhost:3000/
- Bicycle detail: http://localhost:3000/bicycle?id=1

<br>

## Setup:

1. `npm init -y` to create a new `package.json` file with default values for all fields. The `-y` flag stands for "yes" (automatically answer "yes" to all the prompts), and `package.json` file will be created. `package.json` is a file that describes the **metadata of a Node.js project**
2. Install Express.js `npm i express`, and save under **_dependencies_** of `package-lock.json`.`package-lock.json` is automatically generated by npm when installing packages. It describes the exact dependency tree of the project, including the specific versions of each package and their dependencies.
3. Install Nodemon `npm i nodemon --save-dev`, and save under **_devDependencies_** of `package-lock.json`
4. Installs the EJS (Embedded JavaScript) package `npm i ejs`
   EJS is a **template engine for Node.js** and allows to generate HTML dynamically based on data.
5. Custom script in the the `package.json` file:
   ```
   "scripts": {
    "server": "nodemon index"
   },
   ```
6. Start the server for the Node.js application: `npm run server`
