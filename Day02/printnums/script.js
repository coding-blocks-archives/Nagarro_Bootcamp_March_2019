window.onload = () => {

  let num = document.getElementById('num')
  let print = document.getElementById('print')
  let numlist = document.getElementById('numlist')

  print.onclick = () => {
    let N = parseInt(num.value)
    let start = new Date().getTime()

    let i = 1
    let x = setInterval(() => {
      let li = document.createElement('li')
      li.textContent = i
      numlist.appendChild(li)

      if (i === N) {
        clearInterval(x)
      }

      i++
    }, 100)



    // for (let i = 1; i <= N; i++) {

    //   setTimeout(() => {
    //     let li = document.createElement('li')
    //     li.textContent = i
    //     numlist.appendChild(li)
    //   }, i * 100)

    // }
    let end = new Date().getTime()
    console.log(`Done in ${end - start}`)

  }


}
