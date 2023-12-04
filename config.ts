export default () => ({
  database: {
    type: 'postgres',
    database: 'railway',
    username: 'postgres',
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dropSchema: true,
    synchronize: true,
    autoLoadEntities: true,
  },
});
