const express = require('express');
const router = express.Router();
const pg = require('pg');

const pool = require('../modules/pool');

module.exports = router;

// Add inputted task to db
router.post('/', (req, res) => {
  //console.log('in router');
  let newTask = req.body;
  console.log(newTask);

  // set up Query text
  let queryText = `INSERT INTO "task_list" ("task")
  VALUES ($1);`;

  // send task to the db
  pool
    .query(queryText, [newTask.task])
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('err in post', err);
      res.sendStatus(500);
    });
});

// Send task_list to client
router.get('/', (req, res) => {
  //console.log('in GET');
  let queryText = 'SELECT * FROM "task_list" ORDER BY "isDone"';

  pool
    .query(queryText)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.log('Error getting tasks', err);
      res.sendStatus(500);
    });
});
