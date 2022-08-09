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
  title: 'Project 1 from MAP',
  img: { src: 'images/proyImages/proy1.png', alt: 'article image one' },
  tags: ['ruby', 'Ruby on rails', 'css', 'JavaScript', 'html', 'scss'],
  info: 'Quam illum perferendis minus deserunt quisquam soluta accusamus? Nisi sint enim temporibus reiciendis tenetur reprehenderit in ad odit repellendus dolor.',
  liveLink: 'https://github.com/MarcoOquendoC/Portfolio/blob/main/README.md',
  sourceLink: 'https://github.com/MarcoOquendoC/Portfolio',
});

projects.set('p2', {
  title: 'Project 2 from MAP',
  img: { src: 'images/proyImages/proy2.png', alt: 'article image two' },
  tags: ['ruby', 'Ruby on rails', 'css', 'JavaScript', 'html'],
  info: 'Hic, quam? Deleniti ipsam, impedit dolores quae perspiciatis modi, iure minima ea dolor accusantium deserunt accusamus consequatur. Officia, nesciunt in.',
  liveLink: 'https://github.com/MarcoOquendoC/Portfolio/blob/main/README.md',
  sourceLink: 'https://github.com/MarcoOquendoC/Portfolio',
});

projects.set('p3', {
  title: 'Project 3 from MAP',
  img: { src: 'images/proyImages/proy3.png', alt: 'article image three' },
  tags: ['ruby', 'Ruby on rails', 'css', 'JavaScript'],
  info: 'Eveniet impedit culpa sed laborum deserunt, reprehenderit ullam earum, iure modi blanditiis cupiditate quod itaque maxime fugit autem iste explicabo.',
  liveLink: 'https://github.com/MarcoOquendoC/Portfolio/blob/main/README.md',
  sourceLink: 'https://github.com/MarcoOquendoC/Portfolio',
});

projects.set('p4', {
  title: 'Project 4 from MAP',
  img: { src: 'images/proyImages/proy4.png', alt: 'article image four' },
  tags: ['ruby', 'Ruby on rails', 'css'],
  info: 'Quod totam est tenetur beatae iure quam labore reiciendis itaque, debitis vero esse asperiores doloribus repudiandae ipsam ratione! Officiis, vitae!',
  liveLink: 'https://github.com/MarcoOquendoC/Portfolio/blob/main/README.md',
  sourceLink: 'https://github.com/MarcoOquendoC/Portfolio',
});

projects.set('p5', {
  title: 'Project 5 from MAP',
  img: { src: 'images/proyImages/proy5.png', alt: 'article image five' },
  tags: ['ruby', 'Ruby on rails'],
  info: 'Quis, saepe. Adipisci nulla consequatur nesciunt reiciendis quo dicta magni, voluptatem numquam ex eum autem expedita mollitia! Tempora, qui natus?',
  liveLink: 'https://github.com/MarcoOquendoC/Portfolio/blob/main/README.md',
  sourceLink: 'https://github.com/MarcoOquendoC/Portfolio',
});

projects.set('p6', {
  title: 'Project 6 from MAP',
  img: { src: 'images/proyImages/proy6.png', alt: 'article image six' },
  tags: ['ruby'],
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rem ratione exercitationem a ipsam sunt iste numquam temporibus eos voluptates?',
  liveLink: 'https://github.com/MarcoOquendoC/Portfolio/blob/main/README.md',
  sourceLink: 'https://github.com/MarcoOquendoC/Portfolio',
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
