const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const orderRoutes = require("./routes/orderRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 4006;
app.listen(PORT, () => console.log(`Order Service running on port ${PORT}`));
