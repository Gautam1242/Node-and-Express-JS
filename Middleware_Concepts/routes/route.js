const express = require("express");
const router = express.Router();

// middleares

// authentication middleware
const auth = function (req, res, next) {
  console.log("I am inside auth middleware");

  req.user = { userId: 1, role: "admin" };

  if (req.user) {
    //valid user
    next();
  } else {
    res.json({
      success: false,
      message: "Not a valid user",
    });
  }
};

// student middleware
const isStudent = function (req, res, next) {
  console.log("I am indside student middleware");

  if (req.user.role === "student") {
    next();
  } else {
    res.json({
      success: false,
      message: "Access denied: this is only for students",
    });
  }
};

//admin middleware
const isAdmin = function (req, res, next) {
  console.log("I am inside admin middleware");

  if (req.user.role === "admin") {
    next();
  } else {
    res.json({
      success: false,
      message: "Access denied :this is only for admins",
    });
  }
};

// routes
router.get("/student", auth, isStudent, (req, res) => {
  console.log("Student wala page");
  res.send("Student specific page");
});

router.get("/admin", auth, isAdmin, (req, res) => {
  console.log("Admin wala page");
  res.send("Admin specific page");
});

module.exports = router;
