const pg = require('pg');

const url = require('url');
let config = {};

// Heroku set up stuff
if (process.env.DATABASE_URL) {
  config = {
    // We use the DATABASE_URL from Heroku to connect to our DB
    connectionString: process.env.DATABASE_URL,
    // Heroku also requires this special `ssl` config
    ssl: { rejectUnauthorized: false },
  };
} else {
  // If we're not on heroku, configure PG to use our local database
  config = {
    host: 'localhost',
    port: 5432,
    database: 'weekend-to-do-app', // CHANGE THIS LINE to match your local database name!
  };
}

const pool = new pg.Pool(config);

pool.on('connect', () => {
  console.log('Connected to pg');
});

pool.on('error', (err) => {
  console.log('error connecting to postgres', err);
  process.exit(-1);
});

module.exports = pool;
