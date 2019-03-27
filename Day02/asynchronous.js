let c =  0;
function wait () {
  let t = new Date().getTime()
  while(new Date().getTime() < (t + 2000)) {}
  console.log('wait is over')
}

function count()  {
  console.log(++c)
}
