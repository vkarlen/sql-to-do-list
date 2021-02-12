# Task List

# Base Tasks

- [x] Set up file structure
  - [x] folders: server, public, scripts, styles, vendors, routes
  - [x] files: index.html, client.js, server.js, .gitignore, task_router.js, style.css
- [x] Add jQuery
- [x] npm init
- [x] npm install express
- [x] npm install pg
- [x] Add start command to package.json
- [x] Wire files together so theyre chattin
- [x] Set up database called weekend-to-do-app
- [x] Create db table
  - [x] id
  - [x] task
  - [x] isDone
- [x] Add database.sql file to file structure
- [x] Create inputs for user to enter a task
  - [x] add a submit button
- [x] Submit should POST the task to the server and add it to the database
- [x] Show all tasks that need to be completed on the DOM
- [x] Each item should have a complete and delete button
- [x] Completed tasks should show it visibly on the DOM via color change or strike through or something
- [x] Delete should remove it from the DOM and the db
- [x] Complete button should set isDone to true in db, re render list
- [] Style this b
  - [] background color
  - [] font family & size
  - [] task change

## Do Later

- [x] Sort list by isDone so completed tasks fall to the bottom. (isDone and then id maybe?)

## Stretch Goals

### feature-styling-bootstrap

- [] Add Bootstrap to front end for additional style
  - [] Buttons - make create and complete green and delete red
  - [] Inputs - style text input
  - [] Responsive - make app responsive to different screen sizes [Layout](https://getbootstrap.com/docs/4.1/layout/overview/)

### feature-confirm-delete

- [] Create an "Are you sure?" when deleting a task

### feature-ordering-task-query

- [] Use [Query Params](https://expressjs.com/en/api.html#req.query) to have the request reverse the order of the returned todos.

### feature-time-completed

- [] Add the ability to record when a task was completed. Show the completed date on the frontend in a pretty format using moment.js
