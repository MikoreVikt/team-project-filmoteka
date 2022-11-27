const URL = 'https://api.themoviedb.org/3';
const API_KEY = '0b0e3aacc3da91b758b4697a8f18cb42';

const refs = {
  backdrop: document.querySelector('.backdrop'),
  gallery: document.querySelector('.gallery'),
  closeBtn: document.querySelector('[data-close="close"]'),
  filmModal: document.querySelector('.modal'),
  body: document.querySelector('body'),
};

refs.gallery.addEventListener('click', onPosterClick);
refs.closeBtn.addEventListener('click', toggleModal);
document.addEventListener('keydown', onEscKeyPress);

let markupModal;

function onPosterClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains(`gallery__img`)) {
    return;
  }
  const idValue = e.target.dataset.id;

  fetchId(idValue).then(renderModalWindow);
  toggleModal();
}

function fetchId(id) {
  return fetch(`${URL}/movie/${id}?api_key=${API_KEY}
`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    toggleModal();
  }
}

function isFilmModalOpen() {
  evt.preventDefault();
  refs.filmModal.classList.remove('is-hidden');
  refs.body.classList.add('no-scroll');
  renderModalWindow();
}

// function isFilmModalClose() {
//   refs.filmModal.classList.add('is-hidden');
//   refs.body.classList.remove('no-scroll');
// }
// window.removeEventListener('keydown', onEscKeyPress);

function toggleModal() {
  refs.backdrop.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}

function renderModalWindow({
  poster_path,
  original_title,
  vote_average,
  vote_count,
  popularity,
  genres,
  overview,
  id,
}) {
  const vote = vote_average.toFixed(1);
  const populary = popularity.toFixed(1);
  const genre = genres.map(obj => obj.name).join(', ');

  const markupModal = `
        <div class="modal__container">  
        <div class="poster-container">
  <img class="poster" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${original_title}"/>
    </div>  
    <div class="movie-container">
      <h3 class="modal-title" data-id="${id}">${original_title}</h3>
      <div class="content-wrapper">
      <ul class="container-text">
        <li class="content-text">Vote / Votes</li>
        <li class="content-values" data-vote><span class="vote-item"><b>${vote}</span><span class="slash">/</span> ${vote_count}</b></li>
        </ul>
        <ul class="container-text">
        <li class="content-text">Popularity</li>
        <li class="content-values" data-populary ><b>${populary}</b></li>
        </ul>
        <ul class="container-text">
        <li class="content-text">Original Title</li>
        <li class="content-values"><b>${original_title}</b></li>
</ul>
        <ul class="container-text">
        <li class="content-text">Genre</li>
        <li class="content-values" data-genre ><b>${genre}</b></li>
      </ul>

    
      </div>
      <div class="movie">
      <h4 class="movie__title">ABOUT</h4>
      <p class="movie__text" data-overview >${overview}</p>
      </div>
      <div class="btn-wrap">
        <button type="button" class="button-watched" data-add="watched" >add to watched</button>
        <button type="button" class="button-queue" data-add="queue" >add to queue</button>
      </div>
    </div>
    </div>
        </div>
        </div>`;
  refs.filmModal.innerHTML = markupModal;
}