import Notiflix from 'notiflix';
import {markupCard, addImgIfLocalStgEmpty} from '../watched-queue/watched-queue';

const LOCAL_STORGE_WATCHED = 'local-storage-watched';
const LOCAL_STORGE_QUEUE = 'local-storage-queue';


document.addEventListener('click', handleClickMainPage);
document.addEventListener('click', handleClickLibraryPage)

function handleClickMainPage(e){
    if(!e.target.dataset.add && (e.target.dataset.add !== 'watched' || e.target.dataset.add !== 'queue')){
        return;
    }
    saveToLocalStorage(e.target.dataset.add, e, handleDataOnMainPage);
}

function handleClickLibraryPage(e){
    if(!e.target.dataset.remove && (e.target.dataset.remove !== 'watched' || e.target.dataset.remove !== 'queue')){
        return;
    }
    saveToLocalStorage(e.target.dataset.remove, e, handleDataOnLibraryPage);
}

function saveToLocalStorage(type, e, handle){
    const modal = document.querySelector('.modal__container');
    const film = {
        id: parseInt(modal.querySelector('[data-id]').dataset.id),
        src: modal.querySelector('img').src,
        alt: modal.querySelector('img').alt,
        vote: modal.querySelector('[data-vote]').dataset.vote,
        date: modal.querySelector('[data-date]').dataset.date.slice(0, 4),
        genre: modal.querySelector('[data-genre]').textContent
    }

    const local = {
        watched : {
            key: LOCAL_STORGE_WATCHED,
            data: getData(LOCAL_STORGE_WATCHED)
        },
        queue : {
            key: LOCAL_STORGE_QUEUE,
            data: getData(LOCAL_STORGE_QUEUE)
        }
    }

    
    const key = local[type].key;
    const data = local[type].data;
    
    handle({data, key, film});
}

function handleDataOnMainPage({data, key, film}){
    if(data.some(d => d.id == film.id)){
        save(key, [...data.filter(d => d.id !== film.id)]);
        Notiflix.Notify.warning(`This film removed from your ${type} library`);
    } else {
        save(key, [...data, film]);
        Notiflix.Notify.success(`This film added to your ${type} library`);
    }
}

function handleDataOnLibraryPage({data, key, film}){
    const currentData = data.filter(d => d.id !== film.id);
    document.querySelector('.backdrop').classList.add('is-hidden');
    const type = key.slice(14);
    if(document.querySelector(`#${type}`).classList.contains('btn-active')){
        !currentData.length ? addImgIfLocalStgEmpty() : markupCard(currentData);
    }
    save(key, currentData);
}

function save(key, data){
    localStorage.setItem(key, JSON.stringify(data));
}

function getData(type){
    const result = localStorage.getItem(type);
    return result ? JSON.parse(result) : [];
}
