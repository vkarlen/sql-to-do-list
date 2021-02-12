const express = require('express');
const taskRouter = require('./routes/task_router.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/tasks', taskRouter);

// static page
app.use(express.static('server/public'));

const port = 5000;
app.listen(port, function () {
  console.log("I'm in.", port);
});
