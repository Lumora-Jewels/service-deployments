const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const categoryRoutes = require("./routes/categoryRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/categories", categoryRoutes);

const PORT = process.env.PORT || 4004;
app.listen(PORT, () => console.log(`Category Service running on port ${PORT}`));
