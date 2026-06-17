const containers = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // Toggles the "show" class when at least 15% of the element is visible
        entry.target.classList.toggle("show", entry.isIntersecting);
    });
}, {
    // threshold: 1,
    rootMargin: "-100px",
});

containers.forEach(container => {
    observer.observe(container);
});