$(document).ready(onReady);

function onReady() {
  $('#submitBtn').on('click', addTask);
  $(document).on('click', '.delete', deleteTask);
  $(document).on('click', '.markDone', markDone);

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
      //console.log('Back from server', res);

      updateTable(res);
    })
    .catch((err) => {
      console.log("Didn't get list", err);
    });
} // end getList

function updateTable(taskList) {
  //console.log('in updateTable');
  $('#taskTable').empty();

  // loop through task list
  for (const task of taskList) {
    //console.log(task);
    let rowClass = '';

    // check if Done
    if (task.isDone === true) {
      // Set class 'complete'
      rowClass = 'complete';
    }

    // append to DOM
    $('#taskTable').append(`<tr class ="${rowClass}">
      <td>${task.task}</td>
      <td>${task.isDone}</td>
      <td><button class="markDone" data-id="${task.id}">✓</button></td>
      <td><button class="delete" data-id="${task.id}">X</button></td>
    </tr>`);
  }
} // end updateTable

function deleteTask() {
  //console.log('in delete', $(this).data('id'));
  let taskId = $(this).data('id');

  // Send delete request to server
  $.ajax({
    method: 'DELETE',
    url: `/tasks/${taskId}`,
  })
    .then((res) => {
      //console.log('back from server');

      getList();
    })
    .catch((err) => {
      console.log('Failed to delete', err);
      alert('Could not delete task. Try again.');
    });
} // end deleteTask

function markDone() {
  //console.log('in markDone');

  // send update to server
  $.ajax({
    method: 'PUT',
    url: `/tasks/${$(this).data('id')}`,
  })
    .then((res) => {
      //console.log('Marked done');
      getList();
    })
    .catch((err) => {
      console.log('Not completed', err);
      alert('Could not mark this task as done. Try again.');
    });
} // end markDone
