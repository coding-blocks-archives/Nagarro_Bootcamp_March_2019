$(() => {

  function refreshList() {
    $.get('/todos', (data) => {
      $('#tasklist').empty()

      data.sort((a, b) => a.priority - b.priority)

      for (let todo of data) {
        $('#tasklist').append(
          `<li> ${todo.name} : priority ${todo.priority}</li>`
        )
      }
    })
  }

  refreshList()

  $('#addtask').click(() => {
    $.post(
      '/todos',
      {
        name: $('#taskname').val(),
        priority: $('#priority').val()
      },
      (data) => {
        if (data.success) {
          refreshList()
        }
      }
    )
  })

})
