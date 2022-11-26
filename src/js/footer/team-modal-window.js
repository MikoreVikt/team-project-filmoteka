const students = [
  {
    name: 'Антон </br>',
    role: 'Team Lead',
    photo:
      'https://st2.depositphotos.com/6809168/11747/v/600/depositphotos_117473348-stock-illustration-student-icon-isolated.jpg',
    facebook: 'https://www.facebook.com',
    github: 'https://github.com',
    telegram: 'https://telegram.org',
    linkedin: '',
  },
  {
    name: 'Олександра </br>Криницька',
    role: 'Scrum Master',
    photo:
      'https://st2.depositphotos.com/6809168/11747/v/600/depositphotos_117473348-stock-illustration-student-icon-isolated.jpg',
    facebook: 'https://www.facebook.com',
    github: 'https://github.com',
    telegram: 'https://telegram.org',
    linkedin: '',
  },
  {
    name: 'Лариса </br>Хольцева',
    role: 'роль секция',
    photo:
      'https://st2.depositphotos.com/6809168/11747/v/600/depositphotos_117473348-stock-illustration-student-icon-isolated.jpg',
    facebook: 'https://www.facebook.com',
    github: 'https://github.com',
    telegram: 'https://telegram.org',
    linkedin: '',
  },
  {
    name: 'Оксана </br>Пак',
    role: 'роль секция',
    photo:
      'https://st2.depositphotos.com/6809168/11747/v/600/depositphotos_117473348-stock-illustration-student-icon-isolated.jpg',
    facebook: 'https://www.facebook.com',
    github: 'https://github.com',
    telegram: 'https://telegram.org',
    linkedin: '',
  },
  {
    name: 'Олексій </br>Черній',
    role: 'роль секция',
    photo:
      'https://st2.depositphotos.com/6809168/11747/v/600/depositphotos_117473348-stock-illustration-student-icon-isolated.jpg',
    facebook: 'https://www.facebook.com',
    github: 'https://github.com',
    telegram: 'https://telegram.org',
    linkedin: '',
  },
  {
    name: 'Алім </br>Передерко',
    role: 'роль секция',
    photo:
      'https://st2.depositphotos.com/6809168/11747/v/600/depositphotos_117473348-stock-illustration-student-icon-isolated.jpg',
    facebook: 'https://www.facebook.com',
    github: 'https://github.com',
    telegram: 'https://telegram.org',
    linkedin: '',
  },
  {
    name: 'Фелікс </br>Полканов',
    role: 'роль секция',
    photo:
      'https://st2.depositphotos.com/6809168/11747/v/600/depositphotos_117473348-stock-illustration-student-icon-isolated.jpg',
    facebook: 'https://www.facebook.com',
    github: 'https://github.com',
    telegram: 'https://telegram.org',
    linkedin: '',
  },
  {
    name: 'Анастасія </br>Литвин',
    role: 'роль секция',
    photo:
      'https://st2.depositphotos.com/6809168/11747/v/600/depositphotos_117473348-stock-illustration-student-icon-isolated.jpg',
    facebook: 'https://www.facebook.com',
    github: 'https://github.com',
    telegram: 'https://telegram.org',
    linkedin: '',
  },
  {
    name: 'Михайло </br>Шебуняев',
    role: 'роль секция',
    photo:
      'https://st2.depositphotos.com/6809168/11747/v/600/depositphotos_117473348-stock-illustration-student-icon-isolated.jpg',
    facebook: 'https://www.facebook.com/profile.php?id=100000789429082',
    github: 'https://github.com/MicRedd1985',
    telegram: 'https://telegram.org',
    linkedin: '',
  },
  {
    name: 'Альона </br> Корнієнко',
    role: 'Footer',
    photo:
      'https://st2.depositphotos.com/6809168/11747/v/600/depositphotos_117473348-stock-illustration-student-icon-isolated.jpg',
    facebook: 'https://www.facebook.com',
    github: 'https://github.com',
    telegram: 'https://telegram.org',
    linkedin: '',
  },
  {
    name: 'Олександр </br>Воронцов',
    role: 'роль секция',
    photo:
      'https://st2.depositphotos.com/6809168/11747/v/600/depositphotos_117473348-stock-illustration-student-icon-isolated.jpg',
    facebook: 'https://www.facebook.com',
    github: 'https://github.com/alexandrvorontsov',
    telegram: 'https://t.me/El_Oleksandr',
    linkedin: 'https://linkedin.com/in/oleksandr-vorontsov-652782258',
  },
  {
    name: 'Владислав </br>Белоцкий',
    role: 'роль секция',
    photo:
      'https://st2.depositphotos.com/6809168/11747/v/600/depositphotos_117473348-stock-illustration-student-icon-isolated.jpg',
    facebook: 'https://www.facebook.com',
    github: 'https://github.com',
    telegram: 'https://telegram.org',
    linkedin: '',
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
          <img
            src="${student.photo}"
            class="team-photo"
            width="75"
          />
          <p class="team-title">${student.name}</p>
          <p class="team-role">${student.role}</p>
          <ul class="team-social">
            <li class="team-social-item">
              <a href="${student.facebook}" class="team-social-link">
                <svg class="team-social-icon" width="15" height="15">
                  <use></use>
                </svg>
              </a>
            </li>
            <li class="team-social-item">
              <a href="${student.github}" class="team-social-link">
                <svg class="team-social-icon" width="15" height="15">
                  <use></use>
                </svg>
              </a>
            </li>
            <li class="team-social-item">
              <a href="${student.telegram}" class="team-social-link">
                <svg class="team-social-icon" width="15" height="15">
                  <use></use>
                </svg>
              </a>
            </li>
            <li class="team-social-item">
              <a href="${student.linkedin}" class="team-social-link">
                <svg class="team-social-icon" width="15" height="15">
                  <use></use>
                </svg>
              </a>
            </li>
          </ul>
        </li>`
    )
    .join('');
  refs.teamList.innerHTML = studentCard;
}
