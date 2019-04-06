module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: true,
  entities: ['./src/db/entities/**/*.ts'],
  migrations: ['./src/db/migrations/**/*.ts'],
  subscribers: ['./src/db/subscribers/**/*.ts']
};
