import express from 'express';
import routes from './routes/index.js';

import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;
try {
  app.use(cors());
  app.use(morgan('dev'));
  app.use(express.json());

  app.get('/', (req, res) => {
    res.json({ message: '🟢THE SERVER IS UP AND RUNNING🟢' });
  });

  app.use('/api/v1/', routes);

  app.use('*', (req, res, next) => {
    res.status(404).json({
      error: 'NOT FOUND',
    });
  });

  app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
  });
} catch (error) {
  console.log(error);
}
export default app;
