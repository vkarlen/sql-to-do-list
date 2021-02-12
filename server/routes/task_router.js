const express = require('express');
const router = express.Router();
const pg = require('pg');

const pool = require('../modules/pool');

module.exports = router;

router.post('/', (req, res) => {
  console.log('in router');

  res.send('oki doke');
});
