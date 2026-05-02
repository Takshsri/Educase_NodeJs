const express = require('express');
const cors = require("cors");
require("dotenv").config();


const schoolRoutes = require('./routes/schoolRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/schools',schoolRoutes);
app.listen(3000,()=>{
    console.log("Server is running on Port 3000");
});