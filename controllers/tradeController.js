import Trade from "../models/Trade.js";
import csvParser from "csv-parser";
import fs from "fs";

export const uploadTrades = (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send("No file uploaded.");
  }

  const results = [];
  fs.createReadStream(file.path)
    .pipe(csvParser())
    .on("data", (data) => results.push(data))
    .on("end", async () => {
      fs.unlinkSync(file.path);
      try {
        await storeInDatabase(results);
        console.log("Parsed CSV Data:", results);
        res.json(results); // Return the parsed data as JSON
      } catch (error) {
        console.error("Error storing data in database", error);
        res.status(500).send("Error storing data in database");
      }
    });
};

async function storeInDatabase(data) {
  for (const row of data) {
    const {
      UTC_Time,
      Operation,
      Market,
      "Buy/Sell Amount": amount,
      Price,
    } = row;
    const [base_coin, quote_coin] = Market.split("/");

    const trade = new Trade({
      utc_time: new Date(UTC_Time),
      operation: Operation,
      base_coin: base_coin,
      quote_coin: quote_coin,
      amount: parseFloat(amount),
      price: parseFloat(Price),
    });

    await trade.save();
  }
}


export const getTrade = async (req, res) => {
    try {
        const trades = await Trade.find();
        res.status(200).json(trades);
    } catch (error) {
        console.error("Error fetching trades:", error);
        res.status(500).json({ error: "Error fetching trades from database." });
    }
};

