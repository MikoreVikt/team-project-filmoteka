import Notiflix from 'notiflix';
// import { markupCard } from '../watched-queue/watched-queue-markup';

const LOCAL_STORGE_WATCHED = 'local-storage-watched';
const LOCAL_STORGE_QUEUE = 'local-storage-queue';
let LocalStgWatchedData = [];
let LocalStgQueueData = [];

const refs = {
  libraryCurrent: document.querySelector('#library-link'),
  galleryRef: document.querySelector('.gallery'),
  watchedButton: document.querySelector('#watched'),
  queueButton: document.querySelector('#queue'),
};

currentPageCheck();

function currentPageCheck() {
  if (!refs.libraryCurrent.classList.contains('current')) {
    return;
  } else if (
    localStorage.getItem(LOCAL_STORGE_WATCHED) == null ||
    JSON.parse(localStorage.getItem(LOCAL_STORGE_WATCHED)).length == 0
  ) {
    console.log('проверка при загрузке страницы', LocalStgWatchedData);
    Notiflix.Notify.failure('There are no films in WATCHED !');
    addImgIfLocalStgEmpty();

    refs.queueButton.addEventListener('click', onQueueButton);
  } else {
    LocalStgWatchedData = JSON.parse(
      localStorage.getItem(LOCAL_STORGE_WATCHED)
    );
    let LocalStgData = LocalStgWatchedData;
    markupCard(LocalStgData);
    refs.watchedButton.addEventListener('click', onWatchedButton);
    refs.queueButton.addEventListener('click', onQueueButton);
  }
}

function onWatchedButton() {
  refs.galleryRef.innerHTML = '';
  refs.watchedButton.classList.add('btn-active');
  refs.queueButton.classList.remove('btn-active');
  if (
    localStorage.getItem(LOCAL_STORGE_WATCHED) == null ||
    JSON.parse(localStorage.getItem(LOCAL_STORGE_WATCHED)).length == 0
  ) {
    Notiflix.Notify.failure('There are no films in WATCHED !');
    addImgIfLocalStgEmpty();
    return;
  }
  LocalStgWatchedData = JSON.parse(localStorage.getItem(LOCAL_STORGE_WATCHED));
  let LocalStgData = LocalStgWatchedData;
  markupCard(LocalStgData);
}

function onQueueButton() {
  refs.watchedButton.classList.remove('btn-active');
  refs.queueButton.classList.add('btn-active');
  if (
    localStorage.getItem(LOCAL_STORGE_QUEUE) == null ||
    JSON.parse(localStorage.getItem(LOCAL_STORGE_QUEUE)).length == 0
  ) {
    refs.galleryRef.innerHTML = '';
    Notiflix.Notify.failure('There are no films in Queue !');
    addImgIfLocalStgEmpty();
    refs.watchedButton.addEventListener('click', onWatchedButton);
    return;
  }
  LocalStgQueueData = JSON.parse(localStorage.getItem(LOCAL_STORGE_QUEUE));
  let LocalStgData = LocalStgQueueData;
  console.log(LocalStgData);

  if (
    localStorage.getItem(LOCAL_STORGE_WATCHED) == null ||
    JSON.parse(localStorage.getItem(LOCAL_STORGE_WATCHED)).length == 0
  ) {
    console.log(
      'onWatchedButton внутри функции onQUEUE',
      localStorage.getItem(LOCAL_STORGE_WATCHED)
    );
    addImgIfLocalStgEmpty();
    refs.watchedButton.addEventListener('click', onWatchedButton);
  }
  markupCard(LocalStgData);
}

function markupCard(LocalStgData) {
  const markup = LocalStgData.map(({ alt, date, genre, id, src, vote }) => {
    // const production_date = date.slice(0, 4);
    // const rating = Number(vote).toFixed(1);
    const rating = Number(vote);
    return `
                <li class="gallery__item card-set" data-id="${id}">
        <div class="img-wrap">
          <img
            class="gallery__img"
            src="${src}"
            alt="${alt}"
            loading="lazy"
          />
        </div>
        <div class="gallary-wrapper">
          <h2 class="gallery__title">${alt}</h2>
          <div class="gallery__wrap">
            <p class="gallery__ganres">${genre} | ${date}</p>
            <p class="gallery__rating">${rating}</p>
          </div>
        </div>
      </li>`;
  }).join('');
  refs.galleryRef.innerHTML = markup;
}

function addImgIfLocalStgEmpty() {
  refs.galleryRef.innerHTML =
    '<div class="img-emp"><h2 style="font-size: 20px; text-align: center; margin-bottom: 20px;">You have not chosen anything yet!</h2><img class="img-for-empty" style=" width: 800px; " src="https://kartinkin.net/pics/uploads/posts/2022-08/1660180902_1-kartinkin-net-p-fon-kinoteatr-krasivo-1.jpg" alt=" " loading="lazy"/></div>';
}
