const express = require("express");

const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT || 3000;

// FOR testing purpose

app.get("/", (req, res) => {
  res.send("<h3>It's working</h3>");
});

app.use(bodyParser.json());
app.use("/api/v1/wourkouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log("The app listening ther port", PORT);
});
