// controllers/patientController.js

const Patient = require("../models/patient");

async function createPatient(req, res) {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.json(patient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getPatients(req, res) {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deletePatient(req, res) {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);
    console.log(Patient);
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    res.json({ message: "Patient deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createPatient,
  getPatients,
  deletePatient,
};
