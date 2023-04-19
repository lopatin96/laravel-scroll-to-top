let scrollToTopBtn = document.querySelector("#scroll-to-top");
let rootElement = document.documentElement;

function handleScroll() {
    // Do something on scroll

    if (rootElement.scrollTop > 500) {
        scrollToTopBtn.classList.add("block");
        scrollToTopBtn.classList.remove("hidden");
    } else {
        scrollToTopBtn.classList.add("hidden");
        scrollToTopBtn.classList.remove("block");
    }
}

function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);
