This Backend project wil use MVC pattern and below is the folder structure. 

crypto-trade-api/
├── controllers/
│   ├── balanceController.js
│   └── tradeController.js
├── models/
│   └── Trade.js
├── routes/
│   ├── balanceRoute.js
│   └── tradeRoutes.js
├── uploads/ 
├── index.js
├── config.js
├── package.json

Backend Implementation
CSV Upload API

Endpoint: /api/trades/upload
Functionality: Parses a CSV file of cryptocurrency trades and stores the data in MongoDB.
Technologies: Node.js, Express, MongoDB, Mongoose.
Details:
Extracts trade details such as UTC_Time, Operation, Market, Buy/Sell Amount, and Price.
Splits the Market field into base_coin and quote_coin.
Validates and saves trades to the database.
Asset Balance Calculation API

Endpoint: /api/trades/calculateBalances
Functionality: Calculates and returns the asset balances at a specified timestamp.
Input: JSON with a timestamp.
Output: JSON object with asset balances.
Logic:
Fetches trades before the provided timestamp.
Computes balances by summing "buy" operations and subtracting "sell" operations.

Deployment
Backend Deployment

Platform: Render
Details: Deployed the Node.js backend with MongoDB Atlas for database hosting.
