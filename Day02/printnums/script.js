window.onload = () => {

  let num = document.getElementById('num')
  let print = document.getElementById('print')
  let numlist = document.getElementById('numlist')

  print.onclick = () => {
    let N = parseInt(num.value)
    let start = new Date().getTime()

    for (let i = 1; i <= N; i++) {
      let li = document.createElement('li')
      li.textContent = i
      numlist.appendChild(li)
    }
    let end = new Date().getTime()
    console.log(`Done in ${end - start}`)

  }
}
