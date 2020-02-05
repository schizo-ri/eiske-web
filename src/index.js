// function fader() {
//   const fader = document.getElementById('wrap-fader')
//   const pages = [...fader.querySelectorAll('.fader-page')]
//   const shown = pages.filter(p => p.classList.contains('fade-in'))[0]
//   shown.classList.replace('fade-in', 'fade-out')

//   const page = Number(shown.dataset.faderPage)
//   const next = !(page + 1 > pages.length) && 0
//   console.log(next)
//   pages[next].classList.replace('fade-out', 'fade-in')

//   setTimeout(fader, 3000)
//   return
// }
// setTimeout(fader, 3000)
