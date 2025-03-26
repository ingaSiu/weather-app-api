import { getCities, getForecast } from '../controllers/weatherController.js';

import express from 'express';

const router = express.Router();

router.get('/cities', getCities);
router.get('/forecast/:city', getForecast);

export default router;
