// index.js

const express = require("express");
const mongoose = require("mongoose");
const patientRoutes = require("./routes/patients");

const app = express();

mongoose
  .connect("mongodb://localhost/your_database_name", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json());

app.use("/api", patientRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
