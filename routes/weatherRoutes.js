import express from 'express';

const router = express.Router();

router.get('/cities', (req, res) => res.send({ title: 'GET cities' }));
router.get('/forecast/:city', (req, res) => res.send({ title: 'GET forecast for a city' }));
router.post('/log', (req, res) => res.send({ title: 'POST log user selection' }));
router.get('/popular', (req, res) => res.send({ title: 'GET 3 most popular cities' }));

export default router;
