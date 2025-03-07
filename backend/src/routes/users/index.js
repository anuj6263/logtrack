const express = require("express");

const router = express.Router({ mergeParams: true });

const createUser = async (req, res, next) => {};

const getAllUsers = async (req, res, next) => {};

const getUserDetails = async (req, res, next) => {};

router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:userId", getUserDetails);
