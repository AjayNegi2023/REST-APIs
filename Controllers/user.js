const User = require("../Models/User");
const getAllUsers = async (req, res) => {
  const allUsers = await User.find({});
  res.setHeader("X-MyName", "Ajay");
  return res.json(allUsers);
};

const getUserByID = async (req, res) => {
  const id = Number(req.params.id);
  // const user = users.find((user)=>user.id===id);
  const user = await User.findById(req.params.id);
  return res.json(user);
};

const createUser = async (req, res) => {
  const body = req.body;

  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({
      msg: "All Field are required",
    });
  }

  const result = await User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
    job_title: body.job_title,
  });

  console.log(result);
  return res.status(201).json({
    msg: "User created Successfully",
  });
};
const updateUserByID = async (req, res) => {
  const id = req.params.id;
  const updateData = { first_name: "AJAY" };

  try {
    const updatedUser = await User.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ msg: "User not found" });
    }
    return res.json({ msg: "Updated Successfully", user: updatedUser });
  } catch (error) {
    return res.status(500).json({ msg: "Server Error", error });
  }
};

const deleteUserByID = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res
        .status(404)
        .json({ status: "error", message: `User with id ${id} not found` });
    }
    return res.json({
      status: "success",
      message: `Successfully deleted the user with id ${id}`,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "error", message: "Server Error", error });
  }
};

module.exports = {
  getAllUsers,
  getUserByID,
  updateUserByID,
  deleteUserByID,
  createUser,
};
