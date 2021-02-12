$(document).ready(onReady);

function onReady() {
  $('#submitBtn').on('click', addTask);
}

function addTask() {
  //console.log('in addTask');

  const newTask = {
    task: $('#taskIn').val(),
  };
  // console.log(newTask);

  $.ajax({
    method: 'POST',
    url: '/tasks/',
    data: { task: $('#taskIn').val() },
  })
    .then((res) => {
      console.log('Back from server');
    })
    .catch((err) => {
      console.log('Task not added', err);
      alert('Task not added. Try again later.');
    });
}
