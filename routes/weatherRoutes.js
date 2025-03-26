import { getCities, getForecast } from '../controllers/weatherController.js';

import express from 'express';
import loggerMiddleware from '../middleware/loggerMiddleware.js';

const router = express.Router();

router.get('/cities', getCities);
router.get('/forecast/:city', loggerMiddleware, getForecast);

export default router;
