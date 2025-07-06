require('dotenv').config()
const express = require("express");
const app = express();
const port = 4000;

const jsonData = {
  "name": "John Doe",
  "age": 30,
  "city": "New York"
}
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
app.get("/jsondata",(req,res)=> {
    res.json(jsonData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
