const express = require("express"); // require the express module
const bicycles = require("./data/data.json");

const app = express(); // create an Express application

app.get("/", (req, res) => {
  // res.send(`<h1>Hello</h1>`);
  return res.send(bicycles);
});

app.get("/bicycle", (req, res) => {
  console.log(req.query); // { id: '3' }
  const bicycle = bicycles.find((b) => b.id === req.query.id);
  return res.send(bicycle);
});

const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}.`));
