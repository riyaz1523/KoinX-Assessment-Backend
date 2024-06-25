import express from 'express';
import { calculateBalances } from '../controllers/balanceController.js';

const router = express.Router();

router.post('/balance', calculateBalances);

export default router;
