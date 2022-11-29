export const refs = {
  body: document.querySelector('body'),
  btnToTop: document.getElementById("up-btn"),
}

const upBtn = refs.btnToTop;
window.addEventListener("scroll", scrollFunction);

function scrollFunction () {
    if(window.scrollY > 300 && !refs.body.classList.contains('modal-open')) {
        upBtn.style.display = "block";
    } else {
        upBtn.style.display = "none";
}
};
upBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
});