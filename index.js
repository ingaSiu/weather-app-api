import connectDB from './database/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import weatherRoutes from './routes/weatherRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5001;

app.use('/api/weather', weatherRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Weather tracker API');
});

app.listen(port, async () => {
  console.log(`Weather tracker API is running on port ${port}`);

  await connectDB();
});

export default app;
