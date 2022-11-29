import getRefs from './get-refs';
import { fetchId } from './fetch-id';

const refs = getRefs();
refs.gallery.addEventListener('click', onPosterClick);
refs.closeBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onPosterClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains(`gallery__img`)) {
    return;
  }
  const idValue = e.target.dataset.id;
  fetchId(idValue).then(renderModalWindow);
  onOpenModal();
}

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  refs.backdrop.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.backdrop.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}

function renderModalWindow({
  poster_path,
  original_title,
  vote_average,
  vote_count,
  release_date,
  popularity,
  genres,
  overview,
  id,
  release_date
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
        <li class="content-values" data-vote="${vote}"><span class="vote-item"><b>${vote}</span><span class="slash">/</span><span class="vote-count"> ${vote_count}</b></span></li>
        </ul>
        <ul class="container-text">
        <li class="content-text">Popularity</li>
        <li class="content-values" data-date="${release_date}" ><b>${populary}</b></li>
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
