const workoutService = require("../services/workoutService");
const getAllWorkOuts = (req, res) => {
  try {
    const workouts = workoutService.getAllWorkOuts();
    res.send({ status: "OK", data: workouts });
  } catch (error) {
    res.status(error.status || 500).send({
      status: "FAILED",
      data: {
        error: error.message || error,
      },
    });
  }
};

const getOneWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;

  if (!workoutId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: ":parameter workout can no be empty" },
    });
  }

  try {
    const workout = workoutService.getOneWorkout();
    res.send({ status: "OKD", data: workout });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", data: { error: error.message } || error });
  }
};

const createNewWorkout = (req, res) => {
  const { body } = req;

  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
      },
    });
  }
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTrips: body.trainerTrips,
  };

  try {
    const createWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(200).send({ status: "Ok", data: createWorkout });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneWorkout = (req, res) => {
  const { workoutId } = req.params;
  const { body } = req;

  if (!workoutId) {
    res.status(400).send({
      status: "FAILED",
      error: "Parameter ':workoutId' can not be empty",
    });
  }

  try {
    const updateWorkout = workoutService.updateOneWorkout({
      workoutId,
      workout: body,
    });
    res.status(200).send({ status: "OK", data: updateWorkout });
  } catch (error) {
    res.status(error.status || 500).send({
      status: "FAILED",
      error: {
        error: error.message || error,
      },
    });
  }
};

const deleteOneWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;

  if (!workoutId) {
    res.status(400).send({
      status: "FAILED",
      error: "parameter :workoutId can not be empty",
    });
  }

  try {
    workoutService.deleteOneWorkout(workoutId);
    res.status(204).send({ status: "Ok" });
  } catch (error) {
    res
      .status(error.status || 400)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllWorkOuts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
