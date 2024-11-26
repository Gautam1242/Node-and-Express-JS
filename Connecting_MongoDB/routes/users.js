const express = require("express");
const router = express.Router();

const User = require("../models/userModel");

// routes

// CRUD operations

// view /read operation

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// create operation

router.post("/users", async (req, res) => {
  try {
    const { name, age, weight } = req.body;
    const newUser = new User({ name, age, weight });
    await newUser.save();
    res.status(200).json({
      success: true,
      user: newUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// update operation

router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, age, weight } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, { name, age, weight });

    if (!updatedUser) {
      res.json({
        message: "User not found",
      });
    }

    // but if we successfully found the user and updated it
    res.status(200).json({
      success: true,
      user: updatedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// delete operation
router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser =await User.findByIdAndDelete(id);

    if (!deletedUser) {
      res.json({
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      user:deletedUser
    })
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
