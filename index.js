require('dotenv').config()
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("soham dachawar");
});

app.get("/login", (req, res) => {
  res.send('<h1>Please Login</h1>');
});

app.get("/portfolio",(req,res)=> {
    res.send("<h2>Soham's Portfolio</h2>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
