// Current year
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// Scroll reveal animation
const revealElements = document.querySelectorAll(
    ".section, .statement, .project, .expertise-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.08
    }
);


revealElements.forEach((element) => {
    observer.observe(element);
});
