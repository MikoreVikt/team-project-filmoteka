const galleryRef = document.querySelector('.gallery');

const URL = 'https://api.themoviedb.org/3';
const API_KEY = '0b0e3aacc3da91b758b4697a8f18cb42';

let page = 1;
export let imgHttps = 'https://image.tmdb.org/t/p/w500/';
let src;

export async function createGallery(page) {
  try {
    const genresArray = await fetchGenres().then(data => data.genres);
    const filmsArray = await fetchAPI(page).then(data => data.results);
    createGenres(filmsArray, genresArray);
    validationData(filmsArray);
    markupCard(filmsArray);
  } catch (error) {
    createError();
  }
}

createGallery(page);

function fetchAPI(page) {
  return fetch(`${URL}/trending/movie/day?api_key=${API_KEY}&page=${page}
`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
function fetchGenres() {
  return fetch(`${URL}/genre/movie/list?api_key=${API_KEY}
`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function markupCard(filmsArray) {
  const markup = filmsArray
    .map(
      ({ id, poster_path, title, genre_name, release_date, vote_average }) => {
        const date = release_date.slice(0, 4);
        const rating = vote_average.toFixed(1);
        src = imgHttps + poster_path;
        return `
      <li class="gallery__item card-set">
    <a class="link" href="">
      <div class="img-wrap">
        <img
          width="280"
          class="gallery__img"
          data-id="${id}"
          src=${src}
          alt="${title}"
          loading="lazy"
        />
      </div>
      <div class="gallary-wrapper">
        <h2 class="gallery__title">${title}</h2>
        <div class="gallery__wrap">
          <p class="gallery__ganres">${genre_name} | ${date}</p>
          <p class="gallery__rating">${rating}</p>
        </div>
      </div>
    </a>
  </li>
`;
      }
    )
    .join('');
  galleryRef.innerHTML = markup;
}

function createGenres(films, genres) {
  films.forEach(film => {
    const names = film.genre_ids.map(id => {
      const genreObj = genres.find(genre => genre.id === id);

      return genreObj ? genreObj.name : 'Unknown';
    });

    film.genre_name =
      names.length < 3 ? names.join(', ') : `${names[0]}, ${names[1]}, Other`;
  });
}

function createError() {
  galleryRef.innerHTML = `
  <section>
      <p>Error</p>
      <p>Oops, something went wrong. Please try again later.</p>
    </section>`;
}

export function validationData(films) {
  films.forEach(film => {
    console.log(film.poster_path);
    if (!film.poster_path || film.poster_path === null) {
      src = './images/default-img.jpg';
      film.poster_path = '';
    }
    if (!film.release_date) {
      film.release_date = '';
    }
    if (film.vote_average < 0 || film.vote_average > 10) {
      film.vote_average = 0;
    }
  });
}
// ====== Search by name =========================================================

const formRef = document.querySelector('.form');

let searchValue;

formRef.addEventListener('submit', findName);

async function findName(e) {
  e.preventDefault();
  searchValue = e.target.search.value;
  try {
    const genresArray = await fetchGenres().then(data => data.genres);
    const filmsArray = await fetchName(searchValue).then(data => data.results);
    console.log(filmsArray);
    createGenres(filmsArray, genresArray);

    validationData(filmsArray);

    markupCard(filmsArray);
  } catch (error) {
    createError();
  }
}

function fetchName(value) {
  return fetch(`${URL}/search/movie?api_key=${API_KEY}&query=${value}
`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
