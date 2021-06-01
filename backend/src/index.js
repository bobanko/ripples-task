const express = require("express");
const cors = require("cors");

const sessionsSvc = require("./sessions.service");

const app = express();
const port = 3030;

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

app.use(cors());

app.get("/", function (req, res) {
  res.send("ripples-task api test page");
});

app.use("/sessions", sessionsSvc);
