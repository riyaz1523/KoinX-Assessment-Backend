import Trade from "../models/Trade.js";

export const calculateBalances = async (req, res) => {
  const { timestamp } = req.body;

  console.log("Incoming request:", req.body);
  if (!timestamp) {
    return res.status(400).json({ error: "Timestamp is required." });
  }

  try {
    const balances = await calculateAssetBalances(timestamp);
    res.json(balances);
  } catch (error) {
    console.error("Error calculating balances:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

async function calculateAssetBalances(timestamp) {
  const balances = {};

  const trades = await Trade.find({ utc_time: { $lt: new Date(timestamp) } });

  trades.forEach((trade) => {
    const { base_coin, operation, amount } = trade;
    if (!balances[base_coin]) {
      balances[base_coin] = 0;
    }
    if (operation.toLowerCase() === "buy") {
      balances[base_coin] += amount;
    } else if (operation.toLowerCase() === "sell") {
      balances[base_coin] -= amount;
    }
  });

  Object.keys(balances).forEach((key) => {
    if (balances[key] === 0) {
      delete balances[key];
    }
  });

  return balances;
}
