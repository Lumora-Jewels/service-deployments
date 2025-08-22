const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const cartRoutes = require("./routes/cartRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/cart", cartRoutes);

const PORT = process.env.PORT || 4005;
app.listen(PORT, () => console.log(`Cart Service running on port ${PORT}`));
