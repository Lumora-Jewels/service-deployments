const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 4003;
app.listen(PORT, () => console.log(`Product Service running on port ${PORT}`));
