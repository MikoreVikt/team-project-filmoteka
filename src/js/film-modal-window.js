const backdropRef = document.querySelector('.backdrop');
const galleryRef = document.querySelector('.gallery');

galleryRef.addEventListener('click', onPosterClick);

function onPosterClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains(`gallery__img`)) {
    return;
  }

  const idValue = e.target.dataset.id;
  toggleModal();

  fetchId(idValue).then(renderModalWindow);
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

function toggleModal() {
  backdropRef.classList.toggle('is-hidden');
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
}) {
  const vote = vote_average.toFixed(1);
  const populary = popularity.toFixed(1);
  const genre = genres.map(obj => obj.name).join(', ');

  const markupModal = `<div class="modal"><div class="modal__container">
          <button class="close-btn">
            // <svg class="close-btn__icon" width="18" height="18">
            //   <use href="./icon.svg#icon-close-modal"></use>
            // </svg>
          </button>
          <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${original_title}" />
    <div class="content-wrapper">
      <h3 class="modal-title">${original_title}</h3>
      <div class="container-text">
        <p class="content-text">Vote / Votes</p>
        <p class="content-text">Popularity</p>
        <p class="content-text">Original Title</p>
        <p class="content-text">Genre</p>
      </div>
      <div class="container-values">
        <p class="content-values">${vote} / ${vote_count}</p>
        <p class="content-values">${populary}</p>
        <p class="content-values">${original_title}</p>
        <p class="content-values">${genre}</p>
      </div>
      <h4 class="content-title">ABOUT</h4>
      <p class="content-desc">${overview}</p>
      <div class="btn-wrap">
        <button type="button">add to watched</button>
        <button type="button">add to queue</button>
      </div>
    </div>
        </div>
        </div>`;

  backdropRef.innerHTML = markupModal;
}
