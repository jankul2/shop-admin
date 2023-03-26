const path = require('path');
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL',''),
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'myshop'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'root'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: env('DATABASE_SSL',false),
    },
    debug: false,
  },
});