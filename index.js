const express = require("express"); // require the express module
const bicycles = require("./data/data.json");

const app = express(); // create an Express application

app.set("view engine", "ejs"); // set EJS (Embedded JavaScript) as the view engine for the Express app
app.use(express.static("public")); // middleware that serves static files from "public" directory

app.get("/", (req, res) => {
  // res.send(`<h1>Hello</h1>`);
  return res.render("bicycles"); // bicycles.ejs
});

app.get("/bicycle", (req, res) => {
  // console.log(req.query); // { id: '3' }
  const bicycle = bicycles.find((b) => b.id === req.query.id);
  console.log(bicycle);
  // // {
  // //   id: '5',
  // //   name: 'Urban Terrain UT1000',
  // //   hasDiscount: false,
  // //   originalPrice: 1500,
  // //   image: '5.png',
  // //   star: 5
  // // }
  return res.render("overview", {
    bicycle,
  }); // overview.ejs
});

const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}.`));
