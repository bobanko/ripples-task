const express = require("express");
const router = express.Router();

const dbService = require("./db.service");

// sessions/
router.get("/", async function (req, res) {
  const sessions = await dbService.getSessions();

  console.log("sessions", sessions);

  res.send(JSON.stringify(sessions));
});

// creates new session
router.post("/create", async function (req, res) {
  const sessionId = await dbService.createSession();

  console.log(`session created: ${sessionId}`);

  res.send(sessionId.toString());
});

// updates session
router.post("/update", async function (req, res) {
  const { sessionId, counter } = req.body;

  const session = await dbService.updateSession({ sessionId, counter });

  console.log(`session`, session._id, `updated to`, counter);

  res.json(session);
});

// define the about route
router.get("/about", function (req, res) {
  res.send("About birds");
});

module.exports = router;
