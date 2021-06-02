const express = require("express");
const cors = require("cors");

const sessionsSvc = require("./sessions.service");

const app = express();
const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("ripples-task api test page");
});

app.use("/sessions", sessionsSvc);

module.exports = app;
