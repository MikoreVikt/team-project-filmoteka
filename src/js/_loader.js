/* Loader */
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  loader.classList.add('loader-hidden');
  loader.addEventListener('transitionend', () => {
    console.log('loader');
  });
});
// document.body.removeChild('loader');
