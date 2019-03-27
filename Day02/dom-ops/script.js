console.log('script load' + new Date().getTime())
window.onload = function () {
  console.log('window load' + new Date().getTime())

  let newtask = document.getElementById('newtask')
  let addtask = document.getElementById('addtask')
  let tasklist = document.getElementById('tasklist')

  addtask.onclick = function () {
    tasklist.innerHTML += '<li>' + newtask.value + '</li>'
  }


  console.log(newtask)
}
