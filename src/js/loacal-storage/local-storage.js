import Notiflix from 'notiflix';
import { markupCard, addImgIfLocalStgEmpty} from '../watched-queue/watched-queue';

const LOCAL_STORGE_WATCHED = 'local-storage-watched';
const LOCAL_STORGE_QUEUE = 'local-storage-queue';

export const KEYS = {LOCAL_STORGE_WATCHED, LOCAL_STORGE_QUEUE};

document.addEventListener('click', handleClickMainPage);
document.addEventListener('click', handleClickLibraryPage);

function handleClickMainPage(e){
    if(!e.target.dataset.add && (e.target.dataset.add !== 'watched' || e.target.dataset.add !== 'queue')){
        return;
    }
    saveToLocalStorage(e.target.dataset.add, e, handleData);
}

function handleClickLibraryPage(e) {
  if (!e.target.dataset.remove && (e.target.dataset.remove !== 'watched' || e.target.dataset.remove !== 'queue')) {
    return;
  }
  saveToLocalStorage(e.target.dataset.remove, e, handleDataOnLibraryPage);
}

function saveToLocalStorage(type, e, handle) {
  const modal = document.querySelector('.modal__container');
  const film = {
    id: parseInt(modal.querySelector('[data-id]').dataset.id),
    src: modal.querySelector('img').src,
    alt: modal.querySelector('img').alt,
    vote: modal.querySelector('[data-vote]').dataset.vote,
    date: modal.querySelector('[data-date]').dataset.date.slice(0, 4),
    genre: modal.querySelector('[data-genre]').textContent,
  };

  const local = {
    watched: {
      key: LOCAL_STORGE_WATCHED,
      data: getData(LOCAL_STORGE_WATCHED),
    },
    queue: {
      key: LOCAL_STORGE_QUEUE,
      data: getData(LOCAL_STORGE_QUEUE),
    },
  };

    handle({local, type, film, e});
}

function handleData({local, type, film, e}){    
    const key = local[type].key;
    const data = local[type].data;
    let currentData = data;
    const other = type === 'watched' ? 'queue' : 'watched'
    if(data.find(d => d.id === film.id)){
        currentData = data.filter(d => d.id !== film.id);
        save(key, currentData);
        e.target.textContent = `add to ${type}`;
        Notiflix.Notify.warning(`This film removed from your ${type} library`);
    } else if(local[other].data.find(d => d.id === film.id)){
        Notiflix.Notify.warning(`This film already in ${other} library`);
    } else {
        currentData = [...data, film];
        save(key, currentData);
        e.target.textContent = `remove from ${type}`;
        Notiflix.Notify.success(`This film added to your ${type} library`);
    }
    return currentData;
}

function handleDataOnLibraryPage({local, type, film, e}){
    const currentData = handleData({local, type, film, e});
    if(document.querySelector(`#${type}`).classList.contains('btn-active')){
        document.querySelector('.backdrop').classList.add('is-hidden');
        document.body.classList.remove('no-scroll');
        !currentData.length ? addImgIfLocalStgEmpty() : markupCard(currentData);
    }
}

function save(key, data){
    data.length ? localStorage.setItem(key, JSON.stringify(data))
                : localStorage.removeItem(key);
}

export function getData(type){
    const result = localStorage.getItem(type);
    return result ? JSON.parse(result) : [];
}