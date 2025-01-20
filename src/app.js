const express = require("express");
const connectDB = require("./config/db");
const userRoute = require("./routes/userRoutes");
const app = express();

//Middleware
app.use(express.json());

app.use("/users", userRoute);

//Connect MongoDB
connectDB();

//Basic route
app.get("/", (req, res) => {
  res.send("Welcome to the blogging platform API.");
});

module.exports = app;
