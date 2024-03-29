import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  logging: process.env.LOGGING === 'true',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  autoLoadEntities: true,
  synchronize: true,
}));
