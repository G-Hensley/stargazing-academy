const navMenuToggle = document.getElementById("nav-menu-toggle");
const navLinkList = document.getElementById("nav-links");
const navToggleLabel = document.getElementById("nav-toggle-label");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener('scroll', function() {
    const videoSection = document.getElementById('video-section');
    const rect = videoSection.getBoundingClientRect();
    const inView = (rect.top >= 0 && rect.bottom <= window.innerHeight);

    if (inView) {
        document.body.style.overflow = 'hidden'; // Disable scrolling when the video is in view
    } else {
        document.body.style.overflow = 'auto'; // Re-enable scrolling when out of view
    }
});

navMenuToggle.addEventListener('click', () => {
    navLinkList.classList.toggle("links-slide");
    navToggleLabel.classList.toggle("menu-clicked");
});

for (link of navLinks) {
    link.addEventListener("click", () => {
        navLinkList.classList.toggle("links-slide");
        navToggleLabel.classList.toggle("menu-clicked");
    })
}