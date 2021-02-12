const express = require('express');
const router = express.Router();
const pg = require('pg');

const pool = require('../modules/pool');

module.exports = router;

router.post('/', (req, res) => {
  //console.log('in router');
  let newTask = req.body;
  console.log(newTask);

  // set up Query text
  let queryText = `INSERT INTO "task_list" ("task")
  VALUES ($1);`;

  // set task to the server
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
