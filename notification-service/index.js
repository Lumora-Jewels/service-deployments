const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const notificationRoutes = require("./routes/notificationRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/notifications", notificationRoutes);

const PORT = process.env.PORT || 4008;
app.listen(PORT, () => console.log(`Notification Service running on port ${PORT}`));
