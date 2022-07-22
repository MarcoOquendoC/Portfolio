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
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita explicabo tempora, veritatis inventore magni ad sed voluptatum eum aspernatur nobis distinctio, sit, rem consequatur qui soluta dolor quibusdam architecto minus.',
  liveLink: 'https://github.com/MarcoOquendoC/Portfolio/blob/main/README.md',
  sourceLink: 'https://github.com/MarcoOquendoC/Portfolio',
});

projects.set('p2', {
  title: 'Project 2 from MAP',
  img: { src: 'images/proyImages/proy2.png', alt: 'article image two' },
  tags: ['ruby', 'Ruby on rails', 'css', 'JavaScript', 'html'],
  info: 'Esse accusantium sed expedita! Enim ea maiores tenetur repellendus quas sint quasi temporibus rem, voluptate minus harum ad omnis libero odit tempora doloremque. Earum perspiciatis, dolorum adipisci tenetur ab laudantium!',
  liveLink: 'https://github.com/MarcoOquendoC/Portfolio/blob/main/README.md',
  sourceLink: 'https://github.com/MarcoOquendoC/Portfolio',
});

projects.set('p3', {
  title: 'Project 3 from MAP',
  img: { src: 'images/proyImages/proy3.png', alt: 'article image three' },
  tags: ['ruby', 'Ruby on rails', 'css', 'JavaScript'],
  info: 'Fuga, vero nesciunt minus cupiditate debitis nulla eveniet quia eius quis, repellat dolorem, officiis et atque laborum illum accusamus. Sint maiores amet omnis accusantium blanditiis! Esse officia voluptates natus quia.',
  liveLink: 'https://github.com/MarcoOquendoC/Portfolio/blob/main/README.md',
  sourceLink: 'https://github.com/MarcoOquendoC/Portfolio',
});

projects.set('p4', {
  title: 'Project 4 from MAP',
  img: { src: 'images/proyImages/proy4.png', alt: 'article image four' },
  tags: ['ruby', 'Ruby on rails', 'css'],
  info: 'Laudantium itaque sapiente repellendus quis. Sint incidunt tenetur voluptate veniam suscipit unde, reiciendis repellendus quis totam, blanditiis temporibus earum tempora, assumenda quia dicta consequuntur quos molestiae dolorum impedit voluptatum magnam.',
  liveLink: 'https://github.com/MarcoOquendoC/Portfolio/blob/main/README.md',
  sourceLink: 'https://github.com/MarcoOquendoC/Portfolio',
});

projects.set('p5', {
  title: 'Project 5 from MAP',
  img: { src: 'images/proyImages/proy5.png', alt: 'article image five' },
  tags: ['ruby', 'Ruby on rails'],
  info: 'Corporis eligendi quidem sed possimus expedita nemo dolorem exercitationem mollitia explicabo nam laborum sapiente, aspernatur amet fugit. Obcaecati similique mollitia omnis pariatur eum qui, minus, adipisci officiis, tempora nobis error.',
  liveLink: 'https://github.com/MarcoOquendoC/Portfolio/blob/main/README.md',
  sourceLink: 'https://github.com/MarcoOquendoC/Portfolio',
});

projects.set('p6', {
  title: 'Project 6 from MAP',
  img: { src: 'images/proyImages/proy6.png', alt: 'article image six' },
  tags: ['ruby'],
  info: 'Dolor fuga ullam adipisci voluptates cupiditate ea. Laborum, dolor! Repellendus dignissimos voluptate rerum hic, molestias quod obcaecati similique dolorem incidunt cumque? Obcaecati accusamus quos quae. Fugiat beatae molestias a minus?',
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
const closeModalButtons = document.querySelectorAll('.close-btn');
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
    const modal = document.querySelector('#modal');
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
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});
