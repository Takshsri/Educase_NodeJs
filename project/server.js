const express = require('express');
const cors = require("cors");
require("dotenv").config();


const schoolRoutes = require('./routes/schoolRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    message: "School Management API is running 🚀",
    endpoints: {
      addSchool: "POST /api/schools/add",
      listSchools: "GET /api/schools/listSchools?latitude=17.385&longitude=78.4867"
    }
  });
});
app.use('/api/schools',schoolRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});