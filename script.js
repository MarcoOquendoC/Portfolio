const about = document.getElementById('aboutRef');
const contact = document.getElementById('contactRef');
const hamburger = document.getElementById('hamburger');
const closeIcon = document.getElementById('close-icon');
const portfolio = document.getElementById('portfolioRef');
const nav = document.getElementById('top-navigation-container');

function openMenu() {
  closeIcon.classList.remove('hide');
  nav.classList.add('nav');
  about.classList.add('big-font');
  contact.classList.add('big-font');
  portfolio.classList.add('big-font');
  closeIcon.classList.add('close-icon');
}

function closeMenu() {
  closeIcon.classList.add('hide');
  about.classList.add('top-navigation');
  contact.classList.add('top-navigation');
  portfolio.classList.add('top-navigation');
  nav.classList.remove('nav');
  about.classList.remove('big-font');
  contact.classList.remove('big-font');
  portfolio.classList.remove('big-font');
  closeIcon.classList.remove('close-icon');
}

hamburger.addEventListener('click', openMenu);

about.addEventListener('click', closeMenu);
contact.addEventListener('click', closeMenu);
closeIcon.addEventListener('click', closeMenu);
portfolio.addEventListener('click', closeMenu);
