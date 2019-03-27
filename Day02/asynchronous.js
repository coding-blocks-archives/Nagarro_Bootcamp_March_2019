let c = 0;

function wait() {
  setTimeout(function () {
    console.log('wait is over')
  }, 2000)
  let t = new Date().getTime()
  while(new Date().getTime() < (t + 5000)) {}
}

function count() {
  console.log(++c)
}
