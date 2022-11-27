export const API_KEY = '0b0e3aacc3da91b758b4697a8f18cb42';


export async function fetchAllMovies() {
  const url = 'https://api.themoviedb.org/3/trending/all/day';
  const param = new URLSearchParams({
    api_key: API_KEY,
    total_pages: 1,
    total_results: 12,
    adult: true,
  });
  const rest = await fetch(`${url}?${param}`);
  const response = await rest.json();
  return response;
}

// ===================================================================
export async function fetchMoviesGenres() {
  const url = 'https://api.themoviedb.org/3/genre/movie/list';
  const param = new URLSearchParams({
    api_key: API_KEY,
  });

  const rest = await fetch(`${url}?${param}`);
  const response = await rest.json();
  return response;
}

// ===================================================================
export async function fetchTVShowGenres() {
  const url = 'https://api.themoviedb.org/3/genre/tv/list';
  const param = new URLSearchParams({
    api_key: API_KEY,
  });

  const rest = await fetch(`${url}?${param}`);
  const response = await rest.json();
  return response;
}

// ===================================================================
export async function fetchAboutMovies(movieID) {
  const url = `https://api.themoviedb.org/3/movie/${movieID}`;

  const param = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });

  const rest = await fetch(`${url}?${param}`);
  const response = await rest.json();
  return response;
}




