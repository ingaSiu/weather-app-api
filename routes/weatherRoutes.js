import { getCities, getForecast } from '../controllers/weatherController.js';

import express from 'express';

const router = express.Router();

router.get('/cities', getCities);
router.get('/forecast/:city', getForecast);
router.post('/log', (req, res) => res.send({ title: 'POST log user selection' }));
router.get('/popular', (req, res) => res.send({ title: 'GET 3 most popular cities' }));

export default router;
