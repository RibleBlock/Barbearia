const progressBarContainer = document.querySelector("#progressBarContainer");
const progressBar = document.querySelector("#progressBar");
let totalPageHeight = document.body.scrollHeight - window.innerHeight;
let debounceResize;

window.addEventListener("scroll", () => {
    let newProgressHeight = window.pageYOffset / totalPageHeight;
    progressBar.style.transform = `scale(1,${newProgressHeight})`;
    progressBar.style.opacity = `${newProgressHeight}`;
}, {
    capture: true,
    passive: true
});

window.addEventListener("resize", () => {
    clearTimeout(debounceResize);
    debounceResize = setTimeout(() => {
        totalPageHeight = document.body.scrollHeight - window.innerHeight;
    }, 250);
});

progressBarContainer.addEventListener("click", (e) => {
    let newPageScroll = e.clientY / progressBarContainer.offsetHeight * totalPageHeight;
    window.scrollTo({
        top: newPageScroll,
        behavior: 'smooth'
    });
});