window.addEventListener('load', () => {
  document.querySelector('.loader').classList.add('loader-hidden');
  document.querySelector('.loader').addEventListener('transibnend', () => {
    document.body.removeChild(document.querySelector('.loader'));
  });
});
