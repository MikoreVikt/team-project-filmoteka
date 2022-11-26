const LOCAL_STORGE_WATCHED = 'local-storage-watched';
const LOCAL_STORGE_QUEQU = 'local-storage-quequ';


document.addEventListener('click', handleClick);

function handleClick(e){
    if(!e.target.dataset.add && (e.target.dataset.add !== 'watched' || e.target.dataset.add !== 'queue')){
        return;
    }
    saveToLocalStorage(e.target.dataset.add === 'watched', e.target.dataset.id);
}

function saveToLocalStorage(watched, id){
    const saveTo = watched ? LOCAL_STORGE_WATCHED : LOCAL_STORGE_QUEQU;
    const resultJSON = localStorage.getItem(saveTo);
    if(!resultJSON){
        localStorage.setItem(saveTo, JSON.stringify([id]));
        return;
    }
    const result = JSON.parse(resultJSON);
    if(!result.includes(id)){
        result.push(id);
        localStorage.setItem(saveTo, JSON.stringify(result));
    }
}
