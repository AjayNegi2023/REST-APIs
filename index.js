const express = require("express");
const fs = require('fs');
const mongoose = require("mongoose");
const User = require("./Models/User");
const UserRouter = require("./Routes/User.js");
const connectionMongo = require("./connection.js");
const logReqRes = require("./Middlewares");
const app = express();
const PORT = 8000;

// DB Connection
connectionMongo("mongodb://127.0.0.1:27017/NodeExploration")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error: " + error);
  });

// Middleware
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(logReqRes("log.txt")); // Custom middleware to log requests and responses

// Routes
app.use("/api/users", UserRouter); // User-related routes

// Start the server
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
