const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// Scroll reveal
const revealElements = document.querySelectorAll(
    ".section, .statement, .project, .expertise-card, .timeline-item, .education-item"
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


// Photo tilt effect
const photoCard = document.getElementById("photoCard");

if (photoCard) {

    photoCard.addEventListener("mousemove", (event) => {

        const rect = photoCard.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        photoCard.style.transform =
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;

    });

    photoCard.addEventListener("mouseleave", () => {
        photoCard.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    });
}
