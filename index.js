import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Weather tracker API');
});

app.listen(port, () => {
  console.log(`Weather tracker API is running on port ${port}`);
});

export default app;
