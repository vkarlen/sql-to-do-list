$(document).ready(onReady);

function onReady() {
  $('#submitBtn').on('click', addTask);
}

function addTask() {
  //console.log('in addTask');

  $.ajax({
    method: 'POST',
    url: '/tasks/',
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
  console.log('in getList');

  // Get current list from the server
}
