
import * as basicLightbox from 'basiclightbox';
const basicLightbox = require('basiclightbox');

const URL = (api_key, movie_id) => `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${api_key}&language=en-US`;
const API_KEY = '0b0e3aacc3da91b758b4697a8f18cb42';

document.addEventListener('click', e => {
  if(!e.target.dataset.trailer){
    return;
  }
  new RunTrailer(e.target.dataset.trailer).show();
});

class RunTrailer {
  constructor(trailerID) {
    this.trailerID = trailerID;
  }

  #markupTrailer(id) {
    return `<iframe src="https://www.youtube.com/embed/${id}?rel=0&autoplay=1" frameborder="0" allow="autoplay; fullscreen" class="trailer-tag" include></iframe>`;
  }

 
  #showTrailerModal(id) {
    return basicLightbox.create(this.#markupTrailer(id)).show();
  }

   async show() {
    const request = await fetch(URL(API_KEY, this.trailerID));
    const response = await request.json();
    const key = await response.results[0].key;
    this.#showTrailerModal(key);
  }
}


  