const LOCAL_STORGE_WATCHED = 'local-storage-watched';
const LOCAL_STORGE_QUEUE = 'local-storage-queue';


document.addEventListener('click', handleClick);

function handleClick(e){
    if(!e.target.dataset.add && (e.target.dataset.add !== 'watched' || e.target.dataset.add !== 'queue')){
        return;
    }
    saveToLocalStorage(e.target.dataset.add);
}

function saveToLocalStorage(type){
    const modal = document.querySelector('.modal__container');
    const film = {
        id: parseInt(modal.querySelector('[data-id]').dataset.id),
        src: modal.querySelector('img').src,
        alt: modal.querySelector('img').alt,
        vote: modal.querySelector('[data-vote]').textContent,
        populary: modal.querySelector('[data-populary]').textContent,
        overview: modal.querySelector('[data-overview]').textContent,
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

    if(checkData(local, film)){
        return;
    }

    const key = local[type].key;
    const data = local[type].data;

    save(key, [...data, film]);
}

function checkData(savedData, film){
    for(let obj in savedData){
        if(savedData[obj].data.some(d => d.id === film.id)){
            return true;
        }
    }
    return false;
}

function save(key, data){
    localStorage.setItem(key, JSON.stringify(data));
}

function getData(type){
    const result = localStorage.getItem(type);
    return result ? JSON.parse(result) : [];
}
