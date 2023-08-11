import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  PORT: z.any(),
  DB_HOST: z.string(),
  DB_USERNAME: z.string(),
  DB_PASSWORD: z.string(),
});

const _env = envSchema.safeParse(process.env);
if (_env.success === false) {
  console.error('Invalid environment variables!', _env.error.format());
  throw new Error('Invalid environment variables!');
}
export const env = _env.data;
