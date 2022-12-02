export function fetchId(id) {
  const URL = 'https://api.themoviedb.org/3';
  const API_KEY = '0b0e3aacc3da91b758b4697a8f18cb42';
  return fetch(`${URL}/movie/${id}?api_key=${API_KEY}
`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
