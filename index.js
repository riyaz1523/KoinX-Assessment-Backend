import express from "express";
import DBConnection from "./config.js";
import tradeRoutes from "./routes/tradeRoutes.js";
import balanceRoutes from "./routes/balanceRoutes.js";
import cors from "cors";

DBConnection();

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/trades", tradeRoutes);
app.use("/api", balanceRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
