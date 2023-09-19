// routes/patients.js

const express = require("express");
const router = express.Router();
const Patient = require("../models/patient");

// Route to create a new patient entry
router.post("/patients", async (req, res) => {
  console.log("in post api");
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.json(patient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get all patient data
router.get("/patients", async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Route to delete patient
router.delete("/patients/:id", async (req, res) => {
  try {
    console.log("in delete api");
    const patient = await Patient.findByIdAndDelete(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    res.json({ message: "Patient deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
