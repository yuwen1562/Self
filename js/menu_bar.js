window.onscroll = function () {
  myFunction()
}

var menu = document.getElementById('menu')
var sticky = menu.offsetTop

function myFunction() {
  if (window.pageYOffset >= sticky) {
    menu.classList.add('sticky')
  } else {
    menu.classList.remove('sticky')
  }
}
