const express = require('express');
const router = express.Router();
const pg = require('pg');

const pool = require('../modules/pool');

let currentSort = 'id';

// Add inputted task to db
router.post('/', (req, res) => {
  //console.log('in router');
  let newTask = req.body;
  //console.log(newTask);

  // set up Query text
  let queryText = `INSERT INTO "task_list" ("task", "priority")
  VALUES ($1, $2);`;

  // send task to the db
  pool
    .query(queryText, [newTask.task, newTask.priority])
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
  // set up sort direction
  let sortDirection = 'ASC';
  // check if priority is selected to change direction
  if (currentSort === 'priority') {
    sortDirection = 'DESC';
  }

  //console.log('in GET');
  let queryText = `SELECT * FROM "task_list" ORDER BY "isDone", "${currentSort}" ${sortDirection}`;

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

// Delete task
router.delete('/:id', (req, res) => {
  //console.log('in Delete router');
  let bookId = req.params.id;

  let sqlText = 'DELETE FROM "task_list" WHERE "id"=$1';

  pool
    .query(sqlText, [bookId])
    .then((resDB) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('Error deleting book', err);
      res.sendStatus(500);
    });
});

// Mark a task as complete
router.put('/:id', (req, res) => {
  //console.log('In router PUT');
  let taskId = req.params.id;
  let sqlText = `UPDATE "task_list" SET "isDone"='true' WHERE "id"=$1`;

  pool
    .query(sqlText, [taskId])
    .then((resDB) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('Error in PUT', err);
      res.sendStatus(500);
    });
});

// Changes global sort
router.put('/sort/:order', (req, res) => {
  currentSort = req.params.order;
  //console.log(currentSort);

  res.sendStatus(200);
});

// Grab a task by ID
router.get('/:id', (req, res) => {
  let taskId = req.params.id;

  //console.log('in GET');
  let sqlText = `SELECT * FROM "task_list" WHERE "id"=$1`;

  pool
    .query(sqlText, [taskId])
    .then((dbRes) => {
      res.send(dbRes.rows[0]);
    })
    .catch((err) => {
      console.log('Error getting single tasks', err);
      res.sendStatus(500);
    });
});

module.exports = router;
