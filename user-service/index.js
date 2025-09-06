const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`User Service running on port ${PORT}`));
