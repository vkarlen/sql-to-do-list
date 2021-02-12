$(document).ready(onReady);

function onReady() {
  $('#submitBtn').on('click', addTask);

  getList();
} // end onReady

function addTask() {
  //console.log('in addTask');

  $.ajax({
    method: 'POST',
    url: '/tasks',
    data: { task: $('#taskIn').val() },
  })
    .then((res) => {
      //console.log('Back from server');

      $('#taskIn').val('');
      getList();
    })
    .catch((err) => {
      console.log('Task not added', err);
      alert('Task not added. Try again.');
    });
} // end addTask

function getList() {
  //console.log('in getList');

  // Get current list from the server
  $.ajax({
    method: 'GET',
    url: '/tasks',
  })
    .then((res) => {
      //console.log('Back from server');
      //console.log(res);

      updateTable(res);
    })
    .catch((err) => {
      console.log('Didnt get list', err);
    });
} // end getList

function updateTable(taskList) {
  //console.log('in updateTable');
  $('#taskTable').empty();

  // loop through task list
  for (const task of taskList) {
    //console.log(task);

    // check if Done

    // append to DOM
    $('#taskTable').append(`<tr>
    <td>${task.task}</td>
    <td>${task.isDone}</td>
    <td><button class="markDone" data-id="${task.id}">✓</button></td>
    <td><button class="delete" data-id="${task.id}">X</button></td>
  </tr>`);
  }
} // end updateTable
