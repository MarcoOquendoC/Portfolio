const hamburger = document.getElementById('hamburger');
const closeIcon = document.getElementById('close-icon');
const about = document.getElementById('aboutRef');
const contact = document.getElementById('contactRef');
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
  nav.classList.remove('nav');
  about.classList.remove('big-font');
  contact.classList.remove('big-font');
  portfolio.classList.remove('big-font');
  closeIcon.classList.remove('close-icon');
  closeIcon.classList.add('hide');
  about.classList.add('top-navigation');
  contact.classList.add('top-navigation');
  portfolio.classList.add('top-navigation');
}

hamburger.addEventListener('click', openMenu);

about.addEventListener('click', closeMenu);
contact.addEventListener('click', closeMenu);
closeIcon.addEventListener('click', closeMenu);
portfolio.addEventListener('click', closeMenu);

// highlight word when scrolling feature
const section = document.querySelectorAll('.section');
const navlinks = document.querySelectorAll('.top-navigation');

window.onscroll = () => {
  section.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (offset <= top && top <= offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove('active');
        document.querySelector(`header nav a[href *= ${id}]`).classList.add('active');
      });
    }
  });
};