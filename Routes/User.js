const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserByID,
  updateUserByID,
  deleteUserByID,
  createUser
} = require("../Controllers/user");

// Routes for handling user-related operations

// Route for getting all users and creating a new user

router.route("/")
  .get(getAllUsers) // Handle GET requests to fetch all users
  .post(createUser); // Handle POST requests to create a new user

// Route for operations on a specific user identified by ID

router.route("/:id")
  .get(getUserByID) // Handle GET requests to fetch a user by ID
  .patch(updateUserByID) // Handle PATCH requests to update a user by ID
  .delete(deleteUserByID); // Handle DELETE requests to delete a user by ID

module.exports = router;
