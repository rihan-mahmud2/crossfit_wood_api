const workouts = require("../database/workout");
const { v4: uuidv4 } = require("uuid");

const getAllWorkOuts = () => {
  try {
    const allWorkouts = workouts.getAllWorkOuts();
    return allWorkouts;
  } catch (error) {
    throw error;
  }
};
const getOneWorkout = (workoutId) => {
  try {
    const workout = workouts.getWorkout(workoutId);
    return workout;
  } catch (error) {
    throw error;
  }
};
const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuidv4(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };

  try {
    const createWorkout = workouts.createNewWorkout(workoutToInsert);

    return createWorkout;
  } catch (err) {
    throw err;
  }
};
const updateOneWorkout = ({ workoutId, workout }) => {
  try {
    const updatedWorkout = workouts.updatedWorkout(workoutId, workout);
    return updatedWorkout;
  } catch (error) {
    throw error;
  }
};
const deleteOneWorkout = (workoutId) => {
  try {
    workouts.deleteOneWorkout(workoutId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllWorkOuts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
