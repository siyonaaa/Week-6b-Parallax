document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        document.querySelectorAll(".parallax").forEach(section => {
            let speed = 0.5;
            let yPos = -window.scrollY * speed;
            section.style.backgroundPosition = `center ${yPos}px`;
        });
    });
});
