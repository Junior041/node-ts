import express, { Request, Response } from 'express';
import { env } from './env/env';
import buscarRoutes from './routes/buscar.routes';
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Teste');
});

app.use('/buscar', buscarRoutes);

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});
