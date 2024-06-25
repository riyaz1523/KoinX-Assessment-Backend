# Crypto Trade API

This project is a full-stack application that handles the upload of CSV files containing cryptocurrency trade data, stores this data in a MongoDB database, and provides an API to calculate asset balances at a given timestamp. The project is implemented using the MVC pattern in Node.js with Express and Mongoose.

## Folder Structure

```bash
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
```

## Backend Implementation

### CSV Upload API

- **Endpoint**: `/api/trades/upload`
- **Functionality**: Parses a CSV file of cryptocurrency trades and stores the data in MongoDB.
- **Technologies**: Node.js, Express, MongoDB, Mongoose.
- **Details**:
  - Extracts trade details such as `UTC_Time`, `Operation`, `Market`, `Buy/Sell Amount`, and `Price`.
  - Splits the `Market` field into `base_coin` and `quote_coin`.
  - Validates and saves trades to the database.

### Asset Balance Calculation API

- **Endpoint**: `/api/balance`
- **Functionality**: Calculates and returns the asset balances at a specified timestamp.
- **Input**: JSON with a timestamp.


### Deployment
- **Backend Deployment**
- **Platform: Render**
- **Details: Deployed the Node.js backend with MongoDB Atlas for database hosting.**

### Setup
- Prerequisites
- Node.js
- MongoDB

### Installation
- Clone the repository:
```
git clone https://github.com/yourusername/crypto-trade-api.git
```
- Navigate to the project directory:
 ```
cd crypto-trade-api
```
- Install the dependencies:
```
npm install
```
- Create a .env file in the root directory and add your MongoDB connection string:
```
MONGODB_URI=your_mongodb_connection_string
```
- Start the server:
```
npm start
```

