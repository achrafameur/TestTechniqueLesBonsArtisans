const express = require("express");
const cors = require("cors");
const connectDatabase = require("./config/database");

connectDatabase();

// Create App
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", require(`./routes/ProductRoutes`));

// Start server
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`Server started on port ${port} in DEVELOPMNET mode.`);
});
