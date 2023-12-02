import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: 12345,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
  entities: ['*/**/*.entity.ts'],
});
AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initalized!');
  })
  .catch((error) => {
    console.error('Error during Data Source initalization', error);
  });
export default AppDataSource;
