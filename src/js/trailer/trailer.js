
import * as basicLightbox from 'basiclightbox';

const URL = 'https://developers.themoviedb.org/3/movies/get-movie-videos';
const API_KEY = '0b0e3aacc3da91b758b4697a8f18cb42';


const trailerBtn = document.querySelector('.button-trailer');
trailerBtn.addEventListener('click', event => {
  new runTrailer(event.target.dataset.id, event.target.dataset.name).show();
});

class runTrailer {
  constructor(trailerID, trailerName) {
    this.trailerID = trailerID;
    this.trailerName = trailerName;
  }

  async fetchTrailer() {
    const id = await movieTrailer(null, {
      tmdbId: this.trailerID,
      apiKey: settings.API_KEY,
      id: true,
    });
    return id !== null ? id : this.fetchTrailerByName();
  }

  async fetchTrailerByName() {
    const idByName = await movieTrailer(this.trailerName, {
      apiKey: settings.API_KEY,
      id: true,
    });return idByName !== null ? idByName : '';
    
  }

  markupTrailer(id) {
    return `<iframe src="https://www.youtube.com/embed/${id}?rel=0&autoplay=1" frameborder="0" allow="autoplay; fullscreen" class="trailer-tag" include></iframe>`;
  }

  showTrailerModal(markup) {
    return basicLightbox.create(markup).show();
  }

  show() {
    this.fetchTrailer().then(this.markupTrailer).then(this.showTrailerModal);
  }
}


  