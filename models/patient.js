// models/patient.js

const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
