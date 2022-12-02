const galleryRef = document.querySelector('.gallery');

const URL = 'https://api.themoviedb.org/3';
const API_KEY = '0b0e3aacc3da91b758b4697a8f18cb42';

const IMG_HTTPS = 'https://image.tmdb.org/t/p/w500/';
const DEFAULT_SRC = 'https://i.ibb.co/3NkZfz9/moive1.jpg';
let page = 1;
let src;

export { IMG_HTTPS, DEFAULT_SRC };
// ============Search by name===============================
const errorInput = document.querySelector('.message-error');
const textError =
  'Search result not successful. Enter the correct movie name and';
// ========================================================
export async function createGallery(
  page,
  url = `${URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`
) {
  try {
    const filmsArray = await fetchAPI(url).then(data => data.results);
    if (!filmsArray.length) {
      errorInput.innerHTML = textError;
      return;
    } else {
      errorInput.innerHTML = '';
    }
    const genresArray = await fetchGenres().then(data => data.genres);
    createGenres(filmsArray, genresArray);
    validationData(filmsArray);
    markupCard(filmsArray);
  } catch (error) {
    createError();
  }
}

if (document.querySelector('a.nav-link.link.current').text === 'Home') {
  createGallery(page);
}

function fetchAPI(url) {
  return fetch(url).then(response => {
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
    .map(({ id, poster_path, title, genre_name, release_date }) => {
      const date = release_date.slice(0, 4);

      if (poster_path !== DEFAULT_SRC) {
        src = IMG_HTTPS + poster_path;
      } else {
        src = DEFAULT_SRC;
      }

      return `
      <li class="gallery__item card-set" data-id="${id}">
        <div class="img-wrap">
          <img
            class="gallery__img"
            src="${src}"
            alt="${title}"
            loading="lazy"
          />
        </div>
        <div class="gallary-wrapper">
          <h2 class="gallery__title">${title}</h2>
          <p class="gallery__ganres">${genre_name} | ${date}</p>
        </div>
      </li>
`;
    })
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
  if (films.constructor === Array) {
    films.forEach(film => {
      if (!film.poster_path || film.poster_path === null) {
        film.poster_path = DEFAULT_SRC;
      }
      if (!film.release_date) {
        film.release_date = 'N/A';
      }
      if (!film.genre_ids.length) {
        film.genre_name = 'N/A';
      }
    });
  } else {
    if (!films.poster_path || films.poster_path === null) {
      films.poster_path = DEFAULT_SRC;
    }
    if (!films.genres.length) {
      const newObj = { name: 'Genre is not defined' };
      films.genres.push(newObj);
    }
  }
}
