const express = require("express");
const workoutRoutes = require("./workouts");
const router = express.Router();

router.use("/workouts", workoutRoutes);

module.exports = router;