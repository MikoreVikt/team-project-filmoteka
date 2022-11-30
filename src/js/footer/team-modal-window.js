const students = [
  {
    name: 'Антон </br> Ткаченко',
    role: 'Team Lead',
    photo: '../../images/team-modal-window/Tkachenko.png',
    facebook: 'https://www.facebook.com',
    github: 'https://github.com',
    telegram: 'https://telegram.org',
    linkedin: 'https://ua.linkedin.com/',
  },
  {
    name: 'Олександра </br>Криницька',
    role: 'Scrum Master',
    photo: '../../images/team-modal-window/Krynytska.png',
    facebook: 'https://www.facebook.com/olexandra.krynytska',
    github: 'https://github.com/SashaKrynytska',
    telegram: 'https://t.me/Sasha_Krinitskaya',
    linkedin: 'https://www.linkedin.com/in/oleksandra-krynytska-a8b79442/',
  },
  {
    name: 'Лариса </br>Гольцева',
    role: 'Developer',
    photo: '../images/team-modal-window/Holtseva.png',
    facebook: 'https://www.facebook.com/larysa.holtseva.5',
    github: 'https://github.com',
    telegram: 'https://t.me/LarysaHoltseva',
    linkedin: 'https://ua.linkedin.com/',
  },
  {
    name: 'Оксана </br>Пак',
    role: 'Developer',
    photo: './images/team-modal-window/Pak.png',
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
    photo: './images/team-modal-window/Polkanov.png',
    facebook: 'https://www.facebook.com',
    github: 'https://github.com',
    telegram: 'https://telegram.org',
    linkedin: 'https://ua.linkedin.com/',
  },
  {
    name: 'Анастасія </br>Литвин',
    role: 'Developer',
    photo: './images/team-modal-window/Lytvyn.png',
    facebook: 'https://www.facebook.com',
    github: 'hhttps://github.com/AnastasiyaLytvyn',
    telegram: 'https://t.me/nastyalytvyn',
    linkedin: 'https://ua.linkedin.com/',
  },
  {
    name: 'Михайло </br>Щебуняев',
    role: 'Developer',
    photo: './images/team-modal-window/Schebyniaev.png',
    facebook: 'https://www.facebook.com/profile.php?id=100000789429082',
    github: 'https://github.com/MicRedd1985',
    telegram: 'https://t.me/MicRedd',
    linkedin: 'https://ua.linkedin.com/',
  },
  {
    name: 'Альона </br> Корнієнко',
    role: 'Developer',
    photo: './images/team-modal-window/Kornienko.png',
    facebook: 'https://www.facebook.com/alyona.lyashenko.16',
    github: 'https://github.com/AlyonaKorniienko',
    telegram: 'https://t.me/mw_aliona',
    linkedin: 'https://ua.linkedin.com/',
  },
  {
    name: 'Олександр </br>Воронцов',
    role: 'Developer',
    photo: './images/team-modal-window/Vorontsov.png',
    facebook: 'https://www.facebook.com',
    github: 'https://github.com/alexandrvorontsov',
    telegram: 'https://t.me/El_Oleksandr',
    linkedin: 'https://linkedin.com/in/oleksandr-vorontsov-652782258',
  },
  {
    name: 'Владислав </br>Белоцький',
    role: 'Developer',
    photo:
      'https://st2.depositphotos.com/6809168/11747/v/600/depositphotos_117473348-stock-illustration-student-icon-isolated.jpg',
    facebook: 'https://www.facebook.com',
    github: 'https://github.com',
    telegram: 'https://telegram.org',
    linkedin: 'https://ua.linkedin.com/',
  },
];

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
        <a href="${student.facebook}" class="team-social-link">
          <svg class="team-social-icon" width="20" height="20">
            <use href="../../images/sprite.svg#icon-facebook"></use>
          </svg>
        </a>
      </li>
      <li class="team-social-item">
        <a href="${student.github}" class="team-social-link">
          <svg class="team-social-icon" width="20" height="20">
            <use href="../sprite.f14d31f7.svg#icon-github"></use>
          </svg>
        </a>
      </li>
      <li class="team-social-item">
        <a href="${student.telegram}" class="team-social-link">
          <svg class="team-social-icon" width="20" height="20">
            <use href="../../sprite.f14d31f7.svg#icon-telegram"></use>
          </svg>
        </a>
      </li>
      <li class="team-social-item">
        <a href="${student.linkedin}" class="team-social-link">
          <svg class="team-social-icon" width="20" height="20">
            <use href="../../sprite.svg#icon-telegram"></use>
          </svg>
        </a>
      </li>
    </ul>
  </div>
</li>`
    )
    .join('');
  refs.teamList.innerHTML = studentCard;
}
