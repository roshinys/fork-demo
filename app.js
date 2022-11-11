const express = require("express");
const { fork } = require("child_process");

const app = express();

app.get("/", (req, res) => {
  const child = fork("./longtask.js");
  child.send("start");
  child.on("message", (sum) => {
    res.send({ sum: sum });
  });
});

app.listen(3000, () => console.log("server on port 3000..."));

