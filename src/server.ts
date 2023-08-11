import express, { Request, Response } from 'express';
import { env } from './env/env';
import serverRouter from './routes/server.routes';
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Teste');
});

app.use('/server', serverRouter);

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});
