const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closemenu = document.getElementById('nav-close')

toggleMenu.addEventListener('click',()=>{
  navMenu.classList.toggle('show')
})

closemenu.addEventListener('click',()=>{
  navMenu.classList.remove('show')
})

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('selection[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
  const scrollY = window.pageYOffset
  sections.forEach(current =>{
  const selectionHeight = current.offfsetHeight
  const selectionTop = current.offsetTop - 50
  sectionId = current.getAttribute('id')

  if (scrollY > selectionTop && scrollY <= selectionTop+selectionHeight){
    document.querySelector('nav__menu a[href*='+ sectionId +']').classList.add('active')
  }
  else{
     document.querySelector('nav__menu a[href*='+ sectionId +']').classList.remove('active')
  }
  })

}
