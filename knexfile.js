module.exports = {
  development: {
    client: 'pg',
    connection:'postgres://localhost:/knex-drill-1'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
