const about = document.getElementById('aboutRef');
const overlay = document.getElementById('overlay');
const contact = document.getElementById('contactRef');
const hamburger = document.getElementById('hamburger');
const closeIcon = document.getElementById('close-icon');
const portfolio = document.getElementById('portfolioRef');
const nav = document.getElementById('top-navigation-container');

// Open and closing menu
function openMenu() {
  closeIcon.classList.remove('hide');
  nav.classList.add('nav');
  overlay.classList.add('active');
  about.classList.add('big-font');
  contact.classList.add('big-font');
  portfolio.classList.add('big-font');
  closeIcon.classList.add('close-icon');
}

function closeMenu() {
  nav.classList.remove('nav');
  overlay.classList.remove('active');
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

// Highlight word when scrolling feature
const section = document.querySelectorAll('.section');
const navlinks = document.querySelectorAll('.top-navigation');

window.onscroll = () => {
  section.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');
    if (offset <= top && top <= offset + height && id !== 'welcome') {
      navlinks.forEach((links) => {
        links.classList.remove('active');
        document.querySelector(`header nav a[href *= ${id}]`).classList.add('active');
      });
    }
  });
};

// Projects information. Map instead of an array with objects 😁
const projects = new Map();

projects.set('p1', {
  title: 'Capstone #1 : Applied Power Electronics Conference',
  img: { src: 'images/proyImages/proy1.png', alt: 'article image one' },
  tags: ['HTML', 'CSS', 'JavaScript'],
  info: 'Based on an online website for a conference. Applied Power Electronics Conference (APEC) uses the acquired knowledge about HTML, CSS, and JavaScript in a single project.',
  liveLink: 'https://marcooquendoc.github.io/CapstoneAPEC/',
  sourceLink: 'https://github.com/MarcoOquendoC/CapstoneAPEC',
});

projects.set('p2', {
  title: 'Budget-App',
  img: { src: 'images/proyImages/proy2.png', alt: 'Budget-App' },
  tags: ['Ruby', 'Ruby on Rails', 'HTML', 'CSS', 'JavaScript'],
  info: 'Mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
  liveLink: 'https://github.com/MarcoOquendoC/Budget-app',
  sourceLink: 'https://github.com/MarcoOquendoC/Budget-app',
});

projects.set('p3', {
  title: 'CatalogOfMyThings',
  img: { src: 'images/proyImages/proy3.png', alt: 'article image three' },
  tags: ['Ruby'],
  info: 'Console app that will help keeping record of different types of things you own like: books, music albums, movies, and games',
  liveLink: 'https://replit.com/@marcooquendoc/CatalogOfMyThings-RubyCapstone#main.rb',
  sourceLink: 'https://github.com/MarcoOquendoC/CatalogOfMyThings-RubyCapstone',
});

projects.set('p4', {
  title: `Space Traveler's Hub`,
  img: { src: 'images/proyImages/proy4.png', alt: 'article image four' },
  tags: ['HTML', 'CSS', 'JavaScript'],
  info: 'In this App We will be working with the real live data from the SpaceX API. We build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
  liveLink: 'https://marcooquendoc.github.io/space-travelers/',
  sourceLink: 'https://github.com/MarcoOquendoC/space-travelers',
});

projects.set('p5', {
  title: 'School Library',
  img: { src: 'images/proyImages/proy5.png', alt: 'article image five' },
  tags: ['Ruby'],
  info: 'Is a library tool Console App to record what books are in the library and who borrows them, it was built using Object Oriented Programming',
  liveLink: 'https://github.com/MarcoOquendoC/OOP-school-library',
  sourceLink: 'hhttps://github.com/MarcoOquendoC/OOP-school-library',
});

projects.set('p6', {
  title: 'Guess the blur',
  img: { src: 'images/proyImages/proy6.png', alt: 'article image six' },
  tags: ['HTML', 'CSS', 'JavaScript'],
  info: '"Guess the Blur" is a web app that displays a list of random pictures. The user can filter the list by author selecting the search mode. Also, the user can tap an item from the list to switch to the details page of the corresponding picture.',
  liveLink: 'https://deploy-preview-1--friendly-rugelach-ed85f6.netlify.app/',
  sourceLink: 'https://github.com/MarcoOquendoC/capstone3',
});

// Build Portfolio Section
projects.forEach((e, project) => {
  const workGrid = document.getElementById('work-grid');
  const articleToAdd = document.createElement('article');
  const imgToAdd = document.createElement('img');
  const divToAdd = document.createElement('div');
  const title = document.createElement('h3');
  const buttonToAdd = document.createElement('button');
  const ulToAdd = document.createElement('ul');

  articleToAdd.setAttribute('class', 'work-card');
  imgToAdd.setAttribute('class', 'work-card-img');
  imgToAdd.setAttribute('src', projects.get(project).img.src);
  imgToAdd.setAttribute('alt', projects.get(project).img.alt);
  divToAdd.setAttribute('class', 'work-card-content');
  ulToAdd.setAttribute('class', 'tags');
  buttonToAdd.setAttribute('id', project);
  buttonToAdd.setAttribute('type', 'button');
  buttonToAdd.setAttribute('data-modal-target', '#modal');
  buttonToAdd.setAttribute('class', 'primary-btn see-project');

  title.insertAdjacentText('afterbegin', projects.get(project).title);
  buttonToAdd.insertAdjacentText('afterbegin', 'See Project');

  projects.get(project).tags.forEach((tag) => {
    const liToAdd = document.createElement('li');
    liToAdd.insertAdjacentText('afterbegin', tag);
    ulToAdd.appendChild(liToAdd);
  });

  divToAdd.appendChild(title);
  divToAdd.appendChild(ulToAdd);
  divToAdd.appendChild(buttonToAdd);
  articleToAdd.appendChild(imgToAdd);
  articleToAdd.appendChild(divToAdd);
  workGrid.appendChild(articleToAdd);
});

// See Project Popup Feature
const openModalButtons = document.querySelectorAll('.see-project');
const closeModalButtons = document.querySelectorAll('.close-button');
const modalTitle = document.querySelector('#modal #title');
const modalInfo = document.querySelector('#modal #info');

function openModal(modal) {
  if (modal === null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal === null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const project = button.id;
    const modalList = document.getElementById('modal-list');
    const img = document.querySelector('#modal-img');
    modalList.innerHTML = '';
    projects.get(project).tags.forEach((tag) => {
      const liToAdd = document.createElement('li');
      liToAdd.insertAdjacentText('afterbegin', tag);
      modalList.appendChild(liToAdd);
    });
    img.setAttribute('src', projects.get(project).img.src);
    img.setAttribute('alt', projects.get(project).img.alt);
    modalTitle.textContent = projects.get(project).title;
    modalInfo.textContent = projects.get(project).info;
    const modal = document.querySelector('#modal');

    const liveBtn = document.getElementById('live');
    liveBtn.setAttribute('href', projects.get(project).liveLink);

    const sourceBtn = document.getElementById('source');
    sourceBtn.setAttribute('href', projects.get(project).sourceLink);

    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('#modal');
    closeModal(modal);
  });
});
