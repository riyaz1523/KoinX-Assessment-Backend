import express from 'express';
import DBConnection from './config.js';

DBConnection();

const app = express();
const PORT = 3000;



// Middleware
app.use(express.json());


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
