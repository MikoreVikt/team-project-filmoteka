export default function getRefs() {
  return {
    backdrop: document.querySelector('.backdrop'),
    gallery: document.querySelector('.gallery'),
    closeBtn: document.querySelector('[data-close="close"]'),
    filmModal: document.querySelector('.modal'),
    body: document.querySelector('body'),
  };
}
