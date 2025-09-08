const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;


const dataPath = path.join(__dirname, "data.json");
const missionData = JSON.parse(fs.readFileSync(dataPath, "utf-8"));


app.get("/", (req, res) => {
  res.send("🚀 Intercept 3I/ATLAS API is running!");
});

app.get("/api/data", (req, res) => {
  res.json(missionData);
});


app.get("/api/mission", (req, res) => {
  res.json(missionData.mission);
});

app.get("/api/spacecraft", (req, res) => {
  res.json(missionData.spacecraft);
});

app.get("/api/target", (req, res) => {
  res.json(missionData.target);
});

app.get("/api/intercept", (req, res) => {
  res.json(missionData.intercept);
});


app.get("/api/spacecraft/telemetry", (req, res) => {
  res.json(missionData.spacecraft.telemetry);
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
