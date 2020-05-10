window.onload = () => {
  // minute = 60
  // date = new Date(Date.now()).toUTCString()
  // console.log(date)
  // document.cookie = 'advertTimer=' + date + ';' + 'max-age=' + minute / 2
  let alert_message = document.getElementsByClassName('alert')[0]
  if (alert_message) {
    alert_message.classList.add('alert__show')
    setTimeout(() => { 
      alert_message.classList.remove('alert__show')
    }, 3000)
  }
}

let wrapperMenu = document.getElementById('wrapper-menu') 
window.addEventListener('scroll', () => {
  wrapperMenu = document.getElementById('wrapper-menu')
  if (pageYOffset > 20) {
    wrapperMenu.classList.add('wrapper-menu-reduced')
  }
  else {
    wrapperMenu.classList.remove('wrapper-menu-reduced')
  }
})

isOpen = false
let mobileMenuItems = document.getElementsByClassName('mobile-menu')
let mobileMenuIcon = document.getElementsByClassName('menu-button')
MobileMenuIsOpen = () => {
  isOpen = !isOpen
  if (isOpen) {
    mobileMenuIcon[0].classList.add('menu-button__active')
    mobileMenuItems[0].classList.add('mobile-menu__isOpen')
    document.body.classList.add('modal__isOpen')
  }
  else {
    mobileMenuIcon[0].classList.remove('menu-button__active')
    mobileMenuItems[0].classList.remove('mobile-menu__isOpen')
    document.body.classList.remove('modal__isOpen')
  }
}
