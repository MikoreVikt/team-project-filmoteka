const students = [
  {
    name: 'Антон </br> Ткаченко',
    role: 'Team Lead',
    photo: 'https://i.ibb.co/58rh1ZT/Tkachenko.png',
    facebook: 'https://www.facebook.com',
    github: 'https://github.com',
    telegram: 'https://telegram.org',
    linkedin: 'https://ua.linkedin.com/',
  },
  {
    name: 'Олександра </br>Криницька',
    role: 'Scrum Master',
    photo: 'https://i.ibb.co/gD0GZbG/Krynytska.png',
    facebook: 'https://www.facebook.com/olexandra.krynytska',
    github: 'https://github.com/SashaKrynytska',
    telegram: 'https://t.me/Sasha_Krinitskaya',
    linkedin: 'https://www.linkedin.com/in/oleksandra-krynytska-a8b79442/',
  },
  {
    name: 'Лариса </br>Гольцева',
    role: 'Developer',
    photo: 'https://i.ibb.co/MP2NvXk/Holtseva.png',
    facebook: 'https://www.facebook.com/larysa.holtseva.5',
    github: 'https://github.com',
    telegram: 'https://t.me/LarysaHoltseva',
    linkedin: 'https://ua.linkedin.com/',
  },
  {
    name: 'Оксана </br>Пак',
    role: 'Developer',
    photo: 'https://i.ibb.co/F5HWDvp/Pak.png',
    facebook: 'https://www.facebook.com',
    github: 'https://github.com/Oksana-Pak',
    telegram: 'https://t.me/Oksana_Pak_7',
    linkedin: 'https://www.linkedin.com/in/oksana-pak-b14a87216/ ',
  },
  {
    name: 'Олексій </br>Черній',
    role: 'Developer',
    photo:
      'https://st2.depositphotos.com/6809168/11747/v/600/depositphotos_117473348-stock-illustration-student-icon-isolated.jpg',
    facebook: 'https://www.facebook.com',
    github: 'https://github.com',
    telegram: 'https://telegram.org',
    linkedin: 'https://ua.linkedin.com/',
  },
  {
    name: 'Алім </br>Передерко',
    role: 'Developer',
    photo:
      'https://st2.depositphotos.com/6809168/11747/v/600/depositphotos_117473348-stock-illustration-student-icon-isolated.jpg',
    facebook: 'https://www.facebook.com',
    github: 'https://github.com',
    telegram: 'https://telegram.org',
    linkedin: 'https://ua.linkedin.com/',
  },
  {
    name: 'Фелікс </br>Полканов',
    role: 'Developer',
    photo: 'https://i.ibb.co/xLZrppz/Polkanov.png',
    facebook: 'https://www.facebook.com',
    github: 'https://github.com',
    telegram: 'https://telegram.org',
    linkedin: 'https://ua.linkedin.com/',
  },
  {
    name: 'Анастасія </br>Литвин',
    role: 'Developer',
    photo: 'https://i.ibb.co/nmLp9nz/Lytvyn.png',
    facebook: 'https://www.facebook.com',
    github: 'hhttps://github.com/AnastasiyaLytvyn',
    telegram: 'https://t.me/nastyalytvyn',
    linkedin: 'https://ua.linkedin.com/',
  },
  {
    name: 'Михайло </br>Щебуняев',
    role: 'Developer',
    photo: 'https://i.ibb.co/M7Kt1p9/Schebyniaev.png',
    facebook: 'https://www.facebook.com/profile.php?id=100000789429082',
    github: 'https://github.com/MicRedd1985',
    telegram: 'https://t.me/MicRedd',
    linkedin: 'https://ua.linkedin.com/',
  },
  {
    name: 'Альона </br> Корнієнко',
    role: 'Developer',
    photo: 'https://i.ibb.co/3Y6h9Dj/Kornienko.png',
    facebook: 'https://www.facebook.com/alyona.lyashenko.16',
    github: 'https://github.com/AlyonaKorniienko',
    telegram: 'https://t.me/mw_aliona',
    linkedin: 'https://ua.linkedin.com/',
  },
  {
    name: 'Олександр </br>Воронцов',
    role: 'Developer',
    photo: 'https://i.ibb.co/rkB2LJM/Vorontsov.png',
    facebook: 'https://www.facebook.com',
    github: 'https://github.com/alexandrvorontsov',
    telegram: 'https://t.me/El_Oleksandr',
    linkedin: 'https://linkedin.com/in/oleksandr-vorontsov-652782258',
  },
  {
    name: 'Владислав </br>Белоцький',
    role: 'Developer',
    photo: 'https://i.ibb.co/7QdKkSh/Belotskiy.png',
    facebook: 'https://www.facebook.com',
    github: 'https://github.com',
    telegram: 'https://telegram.org',
    linkedin: 'https://ua.linkedin.com/',
  },
];

let icons = {
  facebook:
    '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>',
  github:
    '<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>',
  telegram:
    '<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/></svg>',
  linkedin:
    '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>',
};

const refs = {
  closeBtn: document.querySelector('[data-team-close-btn]'),
  teamLabel: document.querySelector('.footer__label'),
  teamModal: document.querySelector('.back-drop'),
  teamList: document.querySelector('.team-list'),
  body: document.querySelector('body'),
  backdrop: document.querySelector('.back-drop'),
};

refs.teamLabel.addEventListener('click', isTeamModalOpen);
refs.closeBtn.addEventListener('click', isTeamModalClose);
refs.backdrop.addEventListener('click', onBackDropClick);
document.addEventListener('keydown', onEscape);

function onEscape(evt) {
  if (evt.code === 'Escape') {
    isTeamModalClose();
  }
}
function onBackDropClick(evt) {
  if (evt.target.classList.contains('back-drop')) {
    isTeamModalClose();
  }
}

function isTeamModalOpen(evt) {
  evt.preventDefault();
  refs.teamModal.classList.remove('is-hidden');
  refs.body.classList.add('no-scroll');
  renderStudents({ students });
}

function isTeamModalClose(evt) {
  refs.teamModal.classList.add('is-hidden');
  refs.body.classList.remove('no-scroll');
}

function renderStudents() {
  const studentCard = students
    .map(
      student => `<li class="team-card">
  <div>
    <img src="${student.photo}" class="team-photo" width="75" height="75" loading="lazy" />
    <p class="team-title">${student.name}</p>
    <p class="team-role">${student.role}</p>
    <ul class="team-social">
      <li class="team-social-item">
        <a href="${student.facebook}" class="team-social-link">${icons.facebook}</a>
      </li>
      <li class="team-social-item">
        <a href="${student.github}" class="team-social-link">${icons.github}</a>
      </li>
      <li class="team-social-item">
        <a href="${student.telegram}" class="team-social-link">${icons.telegram}
        </a>
      </li>
      <li class="team-social-item">
        <a href="${student.linkedin}" class="team-social-link">${icons.linkedin}</a>
      </li>
    </ul>
  </div>
</li>`
    )
    .join('');
  refs.teamList.innerHTML = studentCard;
}
