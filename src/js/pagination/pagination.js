import { createGallery } from '../main.js/main-render';
let getEl = selector => document.querySelector(selector);

let currentPage = 1;
let maxPage = 100;
let pageCount = 2;
let page = 1;

getEl('.gallery');
getEl('[data-index="1"]').addEventListener('click', onBtnClick);
getEl('[data-index="2"]').addEventListener('click', onBtnClick);
getEl('[data-index="3"]').addEventListener('click', onBtnClick);
getEl('[data-index="4"]').addEventListener('click', onBtnClick);
getEl('[data-index="5"]').addEventListener('click', onBtnClick);

getEl('.first-button').addEventListener('click', function () {
  currentPage = 1;
  render(currentPage);

  createGallery(page).then(data =>{
    
    page = currentPage;
    page = 1;
  }).catch(error => console.log(error))
});


getEl('.last-button').addEventListener('click', function () {
  currentPage = maxPage;
  render(currentPage);
});

getEl('.arrow-right').addEventListener('click', function () {
  currentPage += 1;
  render(currentPage);

  createGallery(page).then(data =>{
    page = currentPage;
    page += 1;
    console.log(page);
  }).catch(error => console.log(error));
});

getEl('.arrow-left').addEventListener('click', function () {
  currentPage -= 1;
  render(currentPage);

  createGallery(page).then(data =>{
    page = currentPage;
    page -= 1;
  }).catch(error => console.log(error));
});

function onBtnClick(event) {
  currentPage = Number(event.target.textContent);
  render(currentPage);

  createGallery(page).then(data =>{
    page = currentPage;
  }).catch(error => console.log(error))
}

let btns = document.querySelectorAll('.pagination__btn');

function render(pageNumber) {
  let startPage = Math.max(1, pageNumber - pageCount);
  let pagesList = [];

  if (startPage + pageCount * 2 > maxPage) {
    startPage = maxPage - pageCount * 2;
  }

  for (let i = startPage; i < startPage + 5; ++i) {
    pagesList.push(i);
  }

  getEl('[data-index="1"]').textContent = pagesList[0];
  getEl('[data-index="2"]').textContent = pagesList[1];
  getEl('[data-index="3"]').textContent = pagesList[2];
  getEl('[data-index="4"]').textContent = pagesList[3];
  getEl('[data-index="5"]').textContent = pagesList[4];

  getEl('.arrow-left').hidden = pageNumber <= 1;
  getEl('.arrow-right').hidden = pageNumber >= maxPage;

  getEl('.dots-left').hidden = pageNumber <= pageCount + 1;
  getEl('.first-button').hidden = getEl('.dots-left').hidden;

  getEl('.dots-after').hidden = pageNumber >= maxPage - pageCount;
  getEl('.last-button').hidden = getEl('.dots-after').hidden;

  btns.forEach(el => el.classList.remove('pagination__btn-current'));
  btns.forEach(el => {
    if (el.textContent == pageNumber) {
      el.classList.add('pagination__btn-current');
    }
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.render = render;

