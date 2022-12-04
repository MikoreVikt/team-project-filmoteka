import { createGallery } from '../main.js/main-render';

let getEl = selector => document.querySelector(selector);

let currentPage = 1;
let maxPage = 100;
let pageCount = 2;

getEl('.pagination').addEventListener('click', handlePagination);

if (document.querySelector('a.nav-link.link.current').text !== 'Home') {
  getEl('.pagination').classList.add('is-hidden');
  return;
}

function handlePagination(e, createGalleryFunc = createGallery) {
  if (Number(e.target.dataset.index)) {
    currentPage = Number(e.target.textContent);
  } else if (e.target.dataset.index == 'first') {
    currentPage = 1;
  } else if (e.target.dataset.index == 'last') {
    currentPage = maxPage;
  } else if (e.target.dataset.index == 'right') {
    currentPage = Math.min(currentPage + 1, 100);
  } else if (e.target.dataset.index == 'left') {
    currentPage = Math.max(currentPage - 1, 1);
  }
  render(currentPage);
  createGalleryFunc(currentPage);
}

function firstPage() {
  currentPage = 1;
  render(currentPage);
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

  pagesList.forEach(
    (e, i) => (getEl(`[data-index="${i + 1}"]`).textContent = e)
  );

  getEl('.arrow-left').hidden = pageNumber <= 1;
  getEl('.arrow-right').hidden = pageNumber >= maxPage;

  getEl('.dots-left').hidden = pageNumber <= pageCount + 2;
  getEl('.first-button').hidden = getEl('.dots-left').hidden;

  getEl('.dots-after').hidden = pageNumber >= maxPage - pageCount - 1;
  getEl('.last-button').hidden = getEl('.dots-after').hidden;

  btns.forEach(el => el.classList.remove('pagination__btn-current'));
  btns.forEach(el => {
    if (el.textContent == pageNumber) {
      el.classList.add('pagination__btn-current');
    }
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

firstPage();

const formRef = document.querySelector('form');
formRef.addEventListener('submit', handleSearch);
let searchHanlderRef;
function handleSearch(e) {
  e.preventDefault();
  if (!e.target.search.value) {
    return;
  }
  firstPage();
  const searchName = e.target.search.value;
  const URL = 'https://api.themoviedb.org/3';
  const API_KEY = '0b0e3aacc3da91b758b4697a8f18cb42';
  const searchUrl = (page, searchName) =>
    `${URL}/search/movie?api_key=${API_KEY}&query=${searchName}&page=${page}`;
  const searchPagination = e =>
    handlePagination(e, page =>
      createGallery(page, searchUrl(page, searchName))
    );
  searchHanlderRef = searchPagination;
  createGallery(1, searchUrl(1, searchName));
  getEl('.pagination').removeEventListener('click', handlePagination);
  getEl('.pagination').addEventListener('click', searchPagination);
}

formRef.addEventListener('input', handleEmptyValue);
function handleEmptyValue(e) {
  if (!e.target.value && searchHanlderRef) {
    createGallery(1);
    firstPage();
    getEl('.pagination').removeEventListener('click', searchHanlderRef);
    getEl('.pagination').addEventListener('click', handlePagination);
  }
}
