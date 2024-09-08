const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  try {
    res.send("Welcome to the Express.js Server!");
  } catch (error) {
    res.send("something went wrong please try again!");
  }
});
app.get("/about", (req, res) => {
  try {
    res.send("This is a simple web server built using Express.js");
  } catch (error) {
    res.send("something went wrong please try again!");
  }
});
app.get("/contact", (req, res) => {
  try {
    res.json({ email: "student@example.com", phone: "123-456-7890" });
  } catch (error) {
    res.send("something went wrong please try again!");
  }
});
app.get("/random", (req, res) => {
  let randNum = Math.random() * 100;
  try {
    res.send(`Random Number:${randNum}`);
  } catch (error) {
    res.send(`something went wrong please try again!${error}`);
  }
});
app.get("*", (req, res) => {
    try {
      res.status(404).send("404 - Page Not Found");
    } catch (error) {
      res.send("something went wrong please try again!");
    }
  });
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
