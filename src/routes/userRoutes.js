const express = require("express");
const router = express.Router();
const {
  createUser,
  getAllUsers,
  getUserByID,
  updateUserByID,
  deleteUserByID,
} = require("../controllers/userController");

router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:id", getUserByID);
router.put("/:id", updateUserByID);
router.delete("/:id", deleteUserByID);

module.exports = router;
