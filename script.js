const nav = document.getElementById('top-navigation-container');
const aTags = document.getElementsByClassName('top-navigation');
const closeIcon = document.getElementById('close-icon');
const hamburger = document.getElementById('hamburger');
const portfolio = document.getElementById('portfolioRef');
const about = document.getElementById('aboutRef');
const contact = document.getElementById('contactRef');

hamburger.addEventListener("click", function() {
  closeIcon.classList.remove('hide');
  nav.classList.add('nav');
  about.classList.add('big-font');
  contact.classList.add('big-font');
  portfolio.classList.add('big-font');
  closeIcon.classList.add('close-icon');
});

closeIcon.addEventListener("click", function() {
  closeIcon.classList.add('hide');
  about.classList.add('top-navigation');
  contact.classList.add('top-navigation');
  portfolio.classList.add('top-navigation');
  nav.classList.remove('nav');
  about.classList.remove('big-font');
  contact.classList.remove('big-font');
  portfolio.classList.remove('big-font');
  closeIcon.classList.remove('close-icon');
});

portfolio.addEventListener("click", function() {
  closeIcon.classList.add('hide');
  about.classList.add('top-navigation');
  contact.classList.add('top-navigation');
  portfolio.classList.add('top-navigation');
  nav.classList.remove('nav');
  about.classList.remove('big-font');
  contact.classList.remove('big-font');
  portfolio.classList.remove('big-font');
  closeIcon.classList.remove('close-icon');
});

about.addEventListener("click", function() {
  closeIcon.classList.add('hide');
  about.classList.add('top-navigation');
  contact.classList.add('top-navigation');
  portfolio.classList.add('top-navigation');
  nav.classList.remove('nav');
  about.classList.remove('big-font');
  contact.classList.remove('big-font');
  portfolio.classList.remove('big-font');
  closeIcon.classList.remove('close-icon');
});

contact.addEventListener("click", function() {
  closeIcon.classList.add('hide');
  about.classList.add('top-navigation');
  contact.classList.add('top-navigation');
  portfolio.classList.add('top-navigation');
  nav.classList.remove('nav');
  about.classList.remove('big-font');
  contact.classList.remove('big-font');
  portfolio.classList.remove('big-font');
  closeIcon.classList.remove('close-icon');
});

