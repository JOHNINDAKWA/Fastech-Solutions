const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');

menuBtn.addEventListener('click', () => {
  menu.style.display = 'block';
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
})

closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  menuBtn.style.display = 'inline-block';
  closeBtn.style.display = 'none';
})

// Function to close the menu on link click
const linkAction = () => {
  menu.style.display = 'none';
  menuBtn.style.display = 'inline-block';
  closeBtn.style.display = 'none';
}

const navLink = menu.querySelectorAll('li');
navLink.forEach(n => n.addEventListener('click', linkAction));

// Change active item functionality
const navItems = menu.querySelectorAll('li');
const changeActiveItem = () => {
  navItems.forEach(item => {
    const link = item.querySelector('a');
    link.classList.remove('active');
  })
}

navItems.forEach(item => {
  const link = item.querySelector('a');
  link.addEventListener('click', () => {
    changeActiveItem();
    link.classList.add('active');
  })
})


//add box shadow on scroll
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('show-box-shadow',window.scrollY > 0)
})

const revealElements = document.querySelectorAll("[data-reveal]")

const scrollReveal = function(){
  for (let i = 0, len = revealElements.length; i < len; i++ ){
    const isElementsOnScreen = revealElements[i].
    getBoundingClientRect().top < window.innerHeight;

    if(isElementsOnScreen){
      revealElements[i].classList.add("revealed")
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
}

window.addEventListener("scroll", scrollReveal);