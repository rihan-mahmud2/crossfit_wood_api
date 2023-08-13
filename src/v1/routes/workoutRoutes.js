const express = require("express");
const workoutControllers = require("../../controllers/workoutControllers");
const router = express.Router();

router.get("/", workoutControllers.getAllWorkOuts);

router.get("/:workoutId", workoutControllers.getOneWorkout);

router.post("/", workoutControllers.createNewWorkout);

router.patch("/:workoutId", workoutControllers.updateOneWorkout);

router.delete("/:workoutId", workoutControllers.deleteOneWorkout);

module.exports = router;
